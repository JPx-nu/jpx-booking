"use client";
import React, { useState, useMemo } from 'react';
import { useData, Service, Worker } from '@/contexts/DataContext';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, DollarSign, User, Calendar as CalendarIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { format, addDays, startOfToday } from 'date-fns';
import { cn } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';

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
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => setSelectedService(service)}
          className={cn(
            "cursor-pointer border-2 rounded-2xl p-6 transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-start justify-between",
            selectedService?.id === service.id
              ? "border-[var(--primary)] bg-pink-50 ring-2 ring-[var(--primary)]"
              : "border-gray-200 bg-white shadow-lg"
          )}
        >
          <div>
            <h3 className="font-bold text-xl text-gray-800">{service.name}</h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">{service.description}</p>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[var(--primary)]" />
                {service.duration} min
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={18} className="text-[var(--primary)]" />
                {service.price}
              </div>
            </div>
          </div>
          <div className={cn(
            "h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all",
            selectedService?.id === service.id ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-gray-300"
          )}>
            {selectedService?.id === service.id && <CheckCircle2 size={20} />}
          </div>
        </div>
      ))}
    </div>
  );

  // --- Step 2: Staff Selection ---
  const renderStaffStep = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div
        onClick={() => setSelectedWorker(null)}
        className={cn(
          "cursor-pointer border-2 rounded-2xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1 hover:shadow-2xl",
          !selectedWorker ? "border-[var(--primary)] bg-pink-50 ring-2 ring-[var(--primary)]" : "border-gray-200 bg-white shadow-lg"
        )}
      >
        <div className="h-20 w-20 rounded-full bg-[var(--secondary)] flex items-center justify-center mb-4 text-[var(--secondary-foreground)]">
          <User size={40} />
        </div>
        <h3 className="font-bold text-lg">Any Professional</h3>
        <p className="text-sm text-gray-500 mt-1">Maximum Availability</p>
      </div>

      {workers.map((worker) => (
        <div
          key={worker.id}
          onClick={() => setSelectedWorker(worker)}
          className={cn(
            "cursor-pointer border-2 rounded-2xl p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1 hover:shadow-2xl",
            selectedWorker?.id === worker.id ? "border-[var(--primary)] bg-pink-50 ring-2 ring-[var(--primary)]" : "border-gray-200 bg-white shadow-lg"
          )}
        >
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 font-bold text-gray-600 text-3xl">
            {worker.avatar}
          </div>
          <h3 className="font-bold text-lg">{worker.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{worker.role}</p>
        </div>
      ))}
    </div>
  );

  // --- Step 3: Date & Time Selection ---
  const availableSlots = useMemo(() => {
    if (!selectedService) return [];
    const workerToUse = selectedWorker || workers[0]; // Fallback for "Any"
    const duration = selectedService.duration;
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    const slots = [];
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
    <div className="flex flex-col lg:flex-row gap-12">
       <div className="lg:w-1/3 space-y-6">
          <h3 className="font-bold text-xl flex items-center gap-3 text-gray-800">
             <CalendarIcon size={24} className="text-[var(--primary)]" /> Select Date
          </h3>
          <div className="flex lg:flex-col gap-3 overflow-x-auto pb-3">
             {Array.from({ length: 14 }).map((_, i) => {
                const d = addDays(startOfToday(), i);
                const isSelected = format(d, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                    className={cn(
                      "min-w-[90px] p-4 rounded-xl border-2 text-center transition-all transform hover:-translate-y-1",
                      isSelected
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-2xl"
                        : "border-gray-200 bg-white hover:border-[var(--primary)] shadow-lg"
                    )}
                  >
                    <div className="text-sm opacity-90 uppercase mb-1 font-semibold">{format(d, 'EEE')}</div>
                    <div className="text-2xl font-bold">{format(d, 'd')}</div>
                  </button>
                );
             })}
          </div>
       </div>

       <div className="flex-1 space-y-6">
          <h3 className="font-bold text-xl flex items-center gap-3 text-gray-800">
             <Clock size={24} className="text-[var(--primary)]" /> Available Slots for {format(selectedDate, 'MMMM do')}
          </h3>
          {availableSlots.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {availableSlots.map(slot => (
                    <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                            "py-3 px-4 rounded-full border-2 text-md font-bold transition-all transform hover:-translate-y-1",
                            selectedTime === slot
                                ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-2xl"
                                : "bg-white border-gray-200 hover:border-[var(--primary)] text-gray-700 shadow-lg"
                        )}
                    >
                        {slot}
                    </button>
                ))}
            </div>
          ) : (
            <div className="p-12 text-center border-2 rounded-2xl border-dashed text-gray-500 bg-gray-50">
                <p className="font-medium">No available slots for this date.</p>
                <p className="text-sm">Please try another day.</p>
            </div>
          )}
       </div>
    </div>
  );

  // --- Step 4: Confirmation ---
  const handleConfirm = () => {
    if (!selectedService || !selectedTime) return;
    const workerToUse = selectedWorker || workers[0];
    addBooking({
        workerId: workerToUse.id,
        serviceId: selectedService.id,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        duration: selectedService.duration,
        customerName: customerName || 'Guest Client',
        type: 'booking'
    });
    alert('Booking Confirmed! Redirecting to home...');
    router.push('/');
  };

  const renderConfirmStep = () => (
    <div className="max-w-xl mx-auto space-y-8">
       <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-pink-100">
          <h3 className="font-bold text-2xl mb-6 text-center text-gray-800">Booking Summary</h3>
          <div className="space-y-4 text-md">
             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Service</span>
                <span className="font-bold text-gray-900">{selectedService?.name}</span>
             </div>
             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Professional</span>
                <span className="font-bold text-gray-900">{selectedWorker?.name || "Any Professional"}</span>
             </div>
             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Date</span>
                <span className="font-bold text-gray-900">{format(selectedDate, 'EEEE, MMMM do')}</span>
             </div>
             <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Time</span>
                <span className="font-bold text-gray-900">{selectedTime}</span>
             </div>
             <div className="flex justify-between items-center pt-4 text-xl font-extrabold text-[var(--primary)]">
                <span>Total Price</span>
                <span>${selectedService?.price}</span>
             </div>
          </div>
       </div>

       <div className="space-y-3">
         <label className="block text-md font-bold text-gray-700">Your Name</label>
         <input
            type="text"
            placeholder="e.g. Jane Doe"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-md shadow-inner"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
         />
         <p className="text-sm text-gray-500">We will use this name for the reservation.</p>
       </div>
    </div>
  );

  const handleNext = () => {
    if (step === 'service' && selectedService) setStep('staff');
    else if (step === 'staff') setStep('datetime');
    else if (step === 'datetime' && selectedTime) setStep('confirm');
    else if (step === 'confirm') handleConfirm();
  };

  const handleBack = () => {
    if (step === 'staff') setStep('service');
    else if (step === 'datetime') setStep('staff');
    else if (step === 'confirm') setStep('datetime');
  };

  const steps = ['service', 'staff', 'datetime', 'confirm'];
  const currentStepIndex = steps.indexOf(step);
  const progress = ((currentStepIndex) / (steps.length - 1)) * 100;

  const stepTitles: { [key in Step]: string } = {
    service: 'Select a Service',
    staff: 'Choose a Professional',
    datetime: 'Select Date & Time',
    confirm: 'Confirm Your Appointment'
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">{stepTitles[step]}</h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
              <div className="relative h-2 bg-gray-200 rounded-full">
                  <div
                      className="absolute top-0 left-0 h-full bg-[var(--primary)] rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${progress}%` }}
                  />
              </div>
              <div className="flex justify-between mt-3 text-sm font-bold text-gray-500">
                  <span className={currentStepIndex >= 0 ? "text-[var(--primary)]" : ""}>Service</span>
                  <span className={currentStepIndex >= 1 ? "text-[var(--primary)]" : ""}>Staff</span>
                  <span className={currentStepIndex >= 2 ? "text-[var(--primary)]" : ""}>Date/Time</span>
                  <span className={currentStepIndex >= 3 ? "text-[var(--primary)]" : ""}>Confirm</span>
              </div>
          </div>

          <div className="min-h-[450px]">
            {step === 'service' && renderServiceStep()}
            {step === 'staff' && renderStaffStep()}
            {step === 'datetime' && renderDateTimeStep()}
            {step === 'confirm' && renderConfirmStep()}
          </div>

           <div className="mt-12 p-6 bg-white rounded-2xl shadow-xl border-t-2 border-[var(--primary)] flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 'service'}
                className={cn(
                  "font-bold text-lg py-3 px-6",
                  step === 'service' ? "invisible" : ""
                )}
              >
                 <ArrowLeft size={20} className="mr-2" /> Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={
                    (step === 'service' && !selectedService) ||
                    (step === 'datetime' && !selectedTime) ||
                    (step === 'confirm' && !customerName)
                }
                size="lg"
                className="font-bold text-lg px-10 py-6"
              >
                {step === 'confirm' ? "Book Now" : "Next"}
                {step !== 'confirm' && <ArrowRight size={20} className="ml-2" />}
              </Button>
           </div>
        </div>
      </main>
    </div>
  );
}
