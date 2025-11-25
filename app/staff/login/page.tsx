"use client";
import React, { useState } from 'react';
import { useData, Worker } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { UserCircle } from 'lucide-react';

export default function StaffLoginPage() {
  const { workers, login } = useData();
  const router = useRouter();
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);

  const handleLogin = () => {
    if (selectedWorkerId) {
      login(selectedWorkerId);
      router.push('/staff/dashboard');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 bg-[var(--muted)]">
      <Card className="w-full max-w-md mx-4 shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-[var(--secondary)] w-16 h-16 rounded-full flex items-center justify-center mb-4">
             <UserCircle className="w-10 h-10 text-[var(--secondary-foreground)]" />
          </div>
          <CardTitle className="text-2xl">Staff Login</CardTitle>
          <p className="text-gray-500 text-sm mt-2">Select your profile to access the dashboard</p>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-3">
            {workers.map((worker) => (
              <div
                key={worker.id}
                onClick={() => setSelectedWorkerId(worker.id)}
                className={`
                  flex items-center p-3 rounded-lg border cursor-pointer transition-all
                  ${selectedWorkerId === worker.id
                    ? 'border-[var(--primary)] bg-[var(--secondary)]/30 ring-1 ring-[var(--primary)]'
                    : 'border-[var(--border)] hover:border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-4 font-bold text-gray-600">
                  {worker.avatar}
                </div>
                <div>
                  <div className="font-medium">{worker.name}</div>
                  <div className="text-xs text-gray-500">{worker.role}</div>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={!selectedWorkerId}
            onClick={handleLogin}
          >
            Enter Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
