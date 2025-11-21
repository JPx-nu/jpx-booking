"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// --- Types ---

export interface Service {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
  description: string;
}

export interface Worker {
  id: string;
  name: string;
  role: string;
  avatar: string; // Initials or color code for now
}

export type BookingType = 'booking' | 'blocked';

export interface Booking {
  id: string;
  workerId: string;
  serviceId?: string; // Optional if type is 'blocked'
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h format)
  customerName?: string;
  type: BookingType;
  duration: number; // Duration in minutes (needed for blocked slots too)
}

interface DataContextType {
  services: Service[];
  workers: Worker[];
  bookings: Booking[];
  currentUser: Worker | null; // For the worker dashboard
  login: (workerId: string) => void;
  logout: () => void;
  addBooking: (booking: Omit<Booking, 'id'>) => void;
  cancelBooking: (bookingId: string) => void;
  isSlotAvailable: (workerId: string, date: string, time: string, duration: number) => boolean;
}

// --- Mock Data ---

const INITIAL_SERVICES: Service[] = [
  { id: 's1', name: 'Quick Trim', duration: 30, price: 30, description: 'A quick refresh for your ends.' },
  { id: 's2', name: 'Signature Cut', duration: 60, price: 65, description: 'Wash, cut, and blow-dry style.' },
  { id: 's3', name: 'Gel Manicure', duration: 45, price: 45, description: 'Long-lasting gel polish application.' },
  { id: 's4', name: 'Full Balayage', duration: 120, price: 180, description: 'Hand-painted highlights for a natural look.' },
];

const INITIAL_WORKERS: Worker[] = [
  { id: 'w1', name: 'Alice', role: 'Senior Stylist', avatar: 'A' },
  { id: 'w2', name: 'Bob', role: 'Colorist', avatar: 'B' },
  { id: 'w3', name: 'Charlie', role: 'Nail Artist', avatar: 'C' },
];

// Helper to generate some random initial bookings for the demo
const generateInitialBookings = (): Booking[] => {
  const bookings: Booking[] = [];
  const today = new Date();

  // Helper to format date YYYY-MM-DD
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  // Add a few bookings for "today" and "tomorrow"
  bookings.push({
    id: 'b1',
    workerId: 'w1',
    serviceId: 's1',
    date: formatDate(today),
    time: '10:00',
    customerName: 'Sarah J.',
    type: 'booking',
    duration: 30
  });

  bookings.push({
    id: 'b2',
    workerId: 'w1',
    date: formatDate(today),
    time: '12:00',
    type: 'blocked', // Lunch break
    duration: 60
  });

  bookings.push({
    id: 'b3',
    workerId: 'w2',
    serviceId: 's4',
    date: formatDate(today),
    time: '09:00',
    customerName: 'Emily R.',
    type: 'booking',
    duration: 120
  });

  return bookings;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services] = useState<Service[]>(INITIAL_SERVICES);
  const [workers] = useState<Worker[]>(INITIAL_WORKERS);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentUser, setCurrentUser] = useState<Worker | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const storedBookings = localStorage.getItem('salon_bookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      const initial = generateInitialBookings();
      setBookings(initial);
      localStorage.setItem('salon_bookings', JSON.stringify(initial));
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever bookings change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('salon_bookings', JSON.stringify(bookings));
    }
  }, [bookings, isInitialized]);

  const login = (workerId: string) => {
    const worker = workers.find(w => w.id === workerId);
    if (worker) setCurrentUser(worker);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addBooking = (newBooking: Omit<Booking, 'id'>) => {
    const bookingWithId = { ...newBooking, id: Math.random().toString(36).substr(2, 9) };
    setBookings(prev => [...prev, bookingWithId]);
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(prev => prev.filter(b => b.id !== bookingId));
  };

  // Simple collision detection
  const isSlotAvailable = (workerId: string, date: string, time: string, duration: number) => {
    // Convert check start/end to minutes from midnight
    const [h, m] = time.split(':').map(Number);
    const checkStart = h * 60 + m;
    const checkEnd = checkStart + duration;

    // Filter bookings for this worker on this day
    const dayBookings = bookings.filter(b => b.workerId === workerId && b.date === date);

    for (const booking of dayBookings) {
      const [bh, bm] = booking.time.split(':').map(Number);
      const bookingStart = bh * 60 + bm;
      const bookingEnd = bookingStart + booking.duration;

      // Check overlap
      // Overlap if (StartA < EndB) and (EndA > StartB)
      if (checkStart < bookingEnd && checkEnd > bookingStart) {
        return false;
      }
    }
    return true;
  };

  return (
    <DataContext.Provider value={{
      services,
      workers,
      bookings,
      currentUser,
      login,
      logout,
      addBooking,
      cancelBooking,
      isSlotAvailable
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
