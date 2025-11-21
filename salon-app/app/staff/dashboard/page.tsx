"use client";
import React, { useState, useMemo } from 'react';
import { useData, Booking } from '@/contexts/DataContext';
import { useRouter } from 'next/navigation';
import { format, startOfWeek, addDays, isSameDay, parseISO, addMinutes } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ChevronLeft, ChevronRight, Clock, User, Lock, Trash2, Plus } from 'lucide-react';
import { cn } from '@/components/ui/Button';

const HOURS = Array.from({ length: 22 }, (_, i) => i + 8); // 8:00 to 21:00 (8am to 9pm)
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DashboardPage() {
  const { currentUser, workers, bookings, cancelBooking, addBooking, login } = useData();
  const router = useRouter();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!currentUser) {
      router.push('/staff/login');
    }
  }, [currentUser, router]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [blockForm, setBlockForm] = useState({ date: '', time: '', duration: 60 });

  // Computed start of the week (Monday)
  const startDate = useMemo(() => startOfWeek(currentDate, { weekStartsOn: 1 }), [currentDate]);

  // Generate array of date objects for the week header
  const weekDates = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
  }, [startDate]);

  // Filter bookings for this week and current user
  const myBookings = useMemo(() => {
    if (!currentUser) return [];
    return bookings.filter(b => b.workerId === currentUser.id);
  }, [bookings, currentUser]);

  const handlePrevWeek = () => setCurrentDate(prev => addDays(prev, -7));
  const handleNextWeek = () => setCurrentDate(prev => addDays(prev, 7));
  const handleToday = () => setCurrentDate(new Date());

  const handleSwitchWorker = (e: React.ChangeEvent<HTMLSelectElement>) => {
    login(e.target.value);
  };

  const handleBlockTime = () => {
    if (!currentUser || !blockForm.date || !blockForm.time) return;

    addBooking({
        workerId: currentUser.id,
        date: blockForm.date,
        time: blockForm.time,
        type: 'blocked',
        duration: blockForm.duration
    });
    setIsBlockModalOpen(false);
  };

  if (!currentUser) return null; // Prevent flash

  return (
    <div className="container-custom py-8 space-y-6">
      {/* Header Control Panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-bold text-[var(--foreground)]">Schedule Management</h1>
           <p className="text-gray-500">Welcome back, {currentUser.name}</p>
        </div>

        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-[var(--border)] shadow-sm">
            <span className="text-sm text-gray-500 pl-2">Viewing:</span>
            <select
                className="bg-transparent font-medium text-[var(--foreground)] focus:outline-none cursor-pointer"
                value={currentUser.id}
                onChange={handleSwitchWorker}
            >
                {workers.map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                ))}
            </select>
        </div>

        <Button onClick={() => setIsBlockModalOpen(true)} className="gap-2">
            <Lock size={16} /> Block Time
        </Button>
      </div>

      {/* Calendar Controls */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold w-48">
                {format(startDate, 'MMMM yyyy')}
            </h2>
            <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" onClick={handlePrevWeek}><ChevronLeft size={18} /></Button>
                <Button variant="outline" size="sm" onClick={handleToday}>Today</Button>
                <Button variant="outline" size="sm" onClick={handleNextWeek}><ChevronRight size={18} /></Button>
            </div>
         </div>
      </div>

      {/* Weekly Schedule Grid */}
      <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden overflow-x-auto">
        <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-8 border-b border-[var(--border)]">
                <div className="p-4 border-r border-[var(--border)] bg-[var(--muted)] text-center font-medium text-gray-500">Time</div>
                {weekDates.map((date, i) => (
                    <div key={i} className={cn(
                        "p-4 text-center border-r border-[var(--border)] last:border-r-0",
                        isSameDay(date, new Date()) ? "bg-[var(--secondary)]/30" : ""
                    )}>
                        <div className="text-xs text-gray-500 uppercase mb-1">{format(date, 'EEE')}</div>
                        <div className={cn(
                            "text-lg font-bold inline-flex items-center justify-center w-8 h-8 rounded-full",
                             isSameDay(date, new Date()) ? "bg-[var(--primary)] text-white" : ""
                        )}>
                            {format(date, 'd')}
                        </div>
                    </div>
                ))}
            </div>

            {/* Grid Body */}
            <div className="relative grid grid-cols-8">
                 {/* Time Column */}
                 <div className="border-r border-[var(--border)] bg-gray-50">
                    {HOURS.map(hour => (
                        <div key={hour} className="h-20 border-b border-[var(--border)] text-xs text-gray-500 p-2 text-right sticky left-0">
                            {hour}:00
                        </div>
                    ))}
                 </div>

                 {/* Days Columns */}
                 {weekDates.map((date, colIndex) => {
                    const dateStr = format(date, 'yyyy-MM-dd');
                    const dayBookings = myBookings.filter(b => b.date === dateStr);

                    return (
                        <div key={colIndex} className="relative border-r border-[var(--border)] last:border-r-0">
                            {/* Background Grid Lines */}
                            {HOURS.map(hour => (
                                <div key={hour} className="h-20 border-b border-[var(--border)] border-dashed" />
                            ))}

                            {/* Events */}
                            {dayBookings.map(booking => {
                                const [h, m] = booking.time.split(':').map(Number);
                                // Calculate position: (Hour - StartHour) * 80px/hr + (Minutes/60 * 80px)
                                // StartHour is 8
                                const startHour = 8;
                                if (h < startHour) return null; // Skip if before 8am (simplified)

                                const top = ((h - startHour) * 80) + ((m / 60) * 80);
                                const height = (booking.duration / 60) * 80;

                                return (
                                    <div
                                        key={booking.id}
                                        className={cn(
                                            "absolute left-1 right-1 rounded-md p-2 text-xs overflow-hidden shadow-sm border transition-all hover:z-10 hover:shadow-md group",
                                            booking.type === 'blocked'
                                                ? "bg-gray-200 border-gray-300 text-gray-500"
                                                : "bg-[var(--secondary)] border-[var(--primary)] text-[var(--secondary-foreground)]"
                                        )}
                                        style={{ top: `${top}px`, height: `${height}px` }}
                                    >
                                        {booking.type === 'blocked' ? (
                                            <div className="flex items-center gap-1 font-medium">
                                                <Lock size={12} /> Unavailable
                                            </div>
                                        ) : (
                                            <>
                                                <div className="font-bold truncate">{booking.customerName}</div>
                                                {/* We need to lookup service name manually or assume it's passed.
                                                    For MVP let's just show duration if service lookup is hard here
                                                    without context overhead, but we have context. */}
                                                <div className="opacity-75 truncate">
                                                    {booking.time} - {booking.duration}m
                                                </div>
                                            </>
                                        )}

                                        <button
                                            onClick={(e) => { e.stopPropagation(); cancelBooking(booking.id); }}
                                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-red-500 hover:bg-white rounded p-0.5"
                                            title="Cancel/Delete"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    );
                 })}
            </div>
        </div>
      </div>

      {/* Block Time Modal */}
      <Modal
        isOpen={isBlockModalOpen}
        onClose={() => setIsBlockModalOpen(false)}
        title="Block Unavailable Time"
      >
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                    type="date"
                    className="w-full p-2 border border-[var(--input)] rounded-md"
                    value={blockForm.date}
                    onChange={e => setBlockForm({...blockForm, date: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Start Time</label>
                    <input
                        type="time"
                        className="w-full p-2 border border-[var(--input)] rounded-md"
                        value={blockForm.time}
                        onChange={e => setBlockForm({...blockForm, time: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Duration (min)</label>
                    <select
                        className="w-full p-2 border border-[var(--input)] rounded-md"
                        value={blockForm.duration}
                        onChange={e => setBlockForm({...blockForm, duration: Number(e.target.value)})}
                    >
                        <option value={30}>30 min</option>
                        <option value={60}>1 hour</option>
                        <option value={90}>1.5 hours</option>
                        <option value={120}>2 hours</option>
                        <option value={240}>4 hours</option>
                        <option value={480}>All Day (8h)</option>
                    </select>
                </div>
            </div>
            <Button className="w-full mt-4" onClick={handleBlockTime}>Confirm Block</Button>
        </div>
      </Modal>
    </div>
  );
}
