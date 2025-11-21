"use client";
import React, { useState, useMemo } from 'react';
import { useData, Service, Worker } from '@/contexts/DataContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, DollarSign, User, Calendar as CalendarIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { format, addDays, startOfToday } from 'date-fns';
import { cn } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

// Steps
type Step = 'service' | 'staff' | 'datetime' | 'confirm';

export default function BookingPage() {
  const { services, workers, isSlotAvailable, addBooking } = useData();
  const router = useRouter();

  const [step, setStep] = useState<Step>('service');

  // Selection State
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');

  // --- Step 1: Service Selection ---
  const renderServiceStep = () => (
    <div className="grid md:grid-cols-2 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => setSelectedService(service)}
          className={cn(
            "cursor-pointer border rounded-xl p-6 transition-all hover:shadow-md flex items-start justify-between",
            selectedService?.id === service.id
              ? "border-[var(--primary)] bg-[var(--secondary)]/20 ring-1 ring-[var(--primary)]"
              : "border-[var(--border)] bg-white"
          )}
        >
          <div>
            <h3 className="font-semibold text-lg">{service.name}</h3>
            <p className="text-gray-500 text-sm mt-1 mb-3">{service.description}</p>
            <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-[var(--primary)]" />
                {service.duration} min
              </div>
              <div className="flex items-center gap-1">
                <DollarSign size={16} className="text-[var(--primary)]" />
                {service.price}
              </div>
            </div>
          </div>
          <div className={cn(
            "h-6 w-6 rounded-full border-2 flex items-center justify-center",
            selectedService?.id === service.id ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-gray-300"
          )}>
            {selectedService?.id === service.id && <CheckCircle2 size={16} />}
          </div>
        </div>
      ))}
    </div>
  );

  // --- Step 2: Staff Selection ---
  const renderStaffStep = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        onClick={() => setSelectedWorker(workers[0])} // Default to first available logic IRL
        className={cn(
          "cursor-pointer border rounded-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-md",
          !selectedWorker ? "border-[var(--primary)] bg-[var(--secondary)]/20 ring-1 ring-[var(--primary)]" : "border-[var(--border)] bg-white"
        )}
      >
        <div className="h-16 w-16 rounded-full bg-[var(--secondary)] flex items-center justify-center mb-3 text-[var(--secondary-foreground)]">
          <User size={32} />
        </div>
        <h3 className="font-medium">Any Professional</h3>
        <p className="text-xs text-gray-500 mt-1">Maximum Availability</p>
      </div>

      {workers.map((worker) => (
        <div
          key={worker.id}
          onClick={() => setSelectedWorker(worker)}
          className={cn(
            "cursor-pointer border rounded-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-md",
            selectedWorker?.id === worker.id ? "border-[var(--primary)] bg-[var(--secondary)]/20 ring-1 ring-[var(--primary)]" : "border-[var(--border)] bg-white"
          )}
        >
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mb-3 font-bold text-gray-600 text-xl">
            {worker.avatar}
          </div>
          <h3 className="font-medium">{worker.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{worker.role}</p>
        </div>
      ))}
    </div>
  );

  // --- Step 3: Date & Time Selection ---
  // Generate available slots based on selected worker and duration
  const availableSlots = useMemo(() => {
    if (!selectedService) return [];
    const workerToUse = selectedWorker || workers[0]; // Fallback for "Any"
    const duration = selectedService.duration;
    const dateStr = format(selectedDate, 'yyyy-MM-dd');

    const slots = [];
    // Start from 9:00 to 17:00 (simplification for demo)
    let startHour = 9;
    let endHour = 17;

    for (let h = startHour; h < endHour; h++) {
      for (let m = 0; m < 60; m += 30) {
        const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        if (isSlotAvailable(workerToUse.id, dateStr, timeStr, duration)) {
          slots.push(timeStr);
        }
      }
    }
    return slots;
  }, [selectedService, selectedWorker, selectedDate, workers, isSlotAvailable]);

  const renderDateTimeStep = () => (
    <div className="flex flex-col md:flex-row gap-8">
       {/* Date Picker (Simple Horizontal List for Demo) */}
       <div className="md:w-1/3 space-y-4">
          <h3 className="font-medium flex items-center gap-2 text-gray-700">
             <CalendarIcon size={18} /> Select Date
          </h3>
          <div className="flex md:flex-col gap-2 overflow-x-auto pb-2">
             {Array.from({ length: 7 }).map((_, i) => {
                const d = addDays(startOfToday(), i);
                const isSelected = format(d, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                    className={cn(
                      "min-w-[80px] p-3 rounded-lg border text-center transition-all",
                      isSelected
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md"
                        : "border-[var(--border)] bg-white hover:border-[var(--primary)]"
                    )}
                  >
                    <div className="text-xs opacity-80 uppercase mb-1">{format(d, 'EEE')}</div>
                    <div className="text-xl font-bold">{format(d, 'd')}</div>
                  </button>
                );
             })}
          </div>
       </div>

       {/* Time Slots */}
       <div className="flex-1 space-y-4">
          <h3 className="font-medium flex items-center gap-2 text-gray-700">
             <Clock size={18} /> Available Slots
          </h3>
          {availableSlots.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {availableSlots.map(slot => (
                    <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                            "py-2 px-4 rounded-full border text-sm font-medium transition-all",
                            selectedTime === slot
                                ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                                : "bg-white border-[var(--border)] hover:border-[var(--primary)] text-gray-600"
                        )}
                    >
                        {slot}
                    </button>
                ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg border-dashed text-gray-500 bg-gray-50">
                No available slots for this date. Please try another day.
            </div>
          )}
       </div>
    </div>
  );

  // --- Step 4: Confirmation ---
  const handleConfirm = () => {
    if (!selectedService || !selectedTime) return;

    const workerToUse = selectedWorker || workers[0]; // Fallback

    addBooking({
        workerId: workerToUse.id,
        serviceId: selectedService.id,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        duration: selectedService.duration,
        customerName: customerName || 'Guest Client',
        type: 'booking'
    });

    // Show success state or redirect
    alert('Booking Confirmed! Redirecting to home...');
    router.push('/');
  };

  const renderConfirmStep = () => (
    <div className="max-w-lg mx-auto space-y-6">
       <div className="bg-[var(--secondary)]/30 p-6 rounded-xl border border-[var(--secondary)]">
          <h3 className="font-semibold text-xl mb-4 text-center">Booking Summary</h3>
          <div className="space-y-3 text-sm">
             <div className="flex justify-between pb-2 border-b border-[var(--secondary-foreground)]/10">
                <span className="text-gray-600">Service</span>
                <span className="font-medium">{selectedService?.name}</span>
             </div>
             <div className="flex justify-between pb-2 border-b border-[var(--secondary-foreground)]/10">
                <span className="text-gray-600">Professional</span>
                <span className="font-medium">{selectedWorker?.name || "Any Professional"}</span>
             </div>
             <div className="flex justify-between pb-2 border-b border-[var(--secondary-foreground)]/10">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">{format(selectedDate, 'EEEE, MMMM do')}</span>
             </div>
             <div className="flex justify-between pb-2 border-b border-[var(--secondary-foreground)]/10">
                <span className="text-gray-600">Time</span>
                <span className="font-medium">{selectedTime}</span>
             </div>
             <div className="flex justify-between pt-2 text-lg font-bold">
                <span>Total Price</span>
                <span>${selectedService?.price}</span>
             </div>
          </div>
       </div>

       <div className="space-y-2">
         <label className="block text-sm font-medium">Your Name</label>
         <input
            type="text"
            placeholder="e.g. Jane Doe"
            className="w-full p-3 rounded-lg border border-[var(--input)] focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
         />
         <p className="text-xs text-gray-500">We will use this name for the reservation.</p>
       </div>
    </div>
  );


  // Navigation Handlers
  const handleNext = () => {
    if (step === 'service' && selectedService) setStep('staff');
    else if (step === 'staff') setStep('datetime'); // selectedWorker is optional
    else if (step === 'datetime' && selectedTime) setStep('confirm');
    else if (step === 'confirm') handleConfirm();
  };

  const handleBack = () => {
    if (step === 'staff') setStep('service');
    else if (step === 'datetime') setStep('staff');
    else if (step === 'confirm') setStep('datetime');
  };

  // Progress Bar
  const steps = ['service', 'staff', 'datetime', 'confirm'];
  const currentStepIndex = steps.indexOf(step);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[var(--primary)] transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex justify-between mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className={currentStepIndex >= 0 ? "text-[var(--primary)]" : ""}>Service</span>
                <span className={currentStepIndex >= 1 ? "text-[var(--primary)]" : ""}>Staff</span>
                <span className={currentStepIndex >= 2 ? "text-[var(--primary)]" : ""}>Time</span>
                <span className={currentStepIndex >= 3 ? "text-[var(--primary)]" : ""}>Confirm</span>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden">
           <div className="p-6 md:p-8 min-h-[400px]">
              {step === 'service' && (
                 <>
                    <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
                    {renderServiceStep()}
                 </>
              )}
              {step === 'staff' && (
                 <>
                    <h2 className="text-2xl font-bold mb-6">Choose a Professional</h2>
                    {renderStaffStep()}
                 </>
              )}
              {step === 'datetime' && (
                 <>
                    <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
                    {renderDateTimeStep()}
                 </>
              )}
              {step === 'confirm' && (
                 <>
                    <h2 className="text-2xl font-bold mb-6 text-center">Confirm Appointment</h2>
                    {renderConfirmStep()}
                 </>
              )}
           </div>

           {/* Footer Actions */}
           <div className="bg-gray-50 p-4 border-t border-[var(--border)] flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 'service'}
                className={step === 'service' ? "invisible" : ""}
              >
                 <ArrowLeft size={16} className="mr-2" /> Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={
                    (step === 'service' && !selectedService) ||
                    (step === 'datetime' && !selectedTime) ||
                    (step === 'confirm' && !customerName)
                }
                className="px-8"
              >
                {step === 'confirm' ? "Book Now" : "Next"}
                {step !== 'confirm' && <ArrowRight size={16} className="ml-2" />}
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
