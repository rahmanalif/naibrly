'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function AuthenticationCodeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'jhon@gmail.com';

  const [code, setCode] = useState(['', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(34);
  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 5);
    const newCode = pastedData.split('').slice(0, 5);

    while (newCode.length < 5) {
      newCode.push('');
    }

    setCode(newCode);

    // Focus the last filled input or the first empty one
    const lastFilledIndex = newCode.findIndex(digit => !digit);
    const focusIndex = lastFilledIndex === -1 ? 4 : lastFilledIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleResend = () => {
    setCountdown(34);
    setCode(['', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Here you would call your resend API
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const fullCode = code.join('');

    if (fullCode.length === 5) {
      setIsLoading(true);

      // Simulate verification
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to new password page
        router.push('/new-password');
      }, 1000);
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 p-2 hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center"
        >
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Authentication Code
          </h1>
          <p className="text-sm text-slate-500">
            Enter 5-digit code we just texted to your Email{' '}
            <span className="font-medium text-slate-700">{email}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleConfirm} className="space-y-6">
          {/* OTP Input */}
          <div className="flex justify-center gap-3 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-14 h-14 text-center text-2xl font-semibold border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-slate-50 text-slate-900"
              />
            ))}
          </div>

          {/* Countdown and Resend */}
          <div className="text-center text-sm">
            <span className="text-slate-500">
              Don't receive the OTP{' '}
              <span className="text-red-500">
                {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}s
              </span>
            </span>
            {countdown === 0 ? (
              <>
                <span className="mx-2 text-slate-300">|</span>
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Resend?
                </button>
              </>
            ) : (
              <span className="mx-2 text-slate-300">|</span>
            )}
            {countdown > 0 && (
              <span className="text-slate-400">Resend?</span>
            )}
          </div>

          {/* Confirm Button */}
          <Button
            type="submit"
            disabled={!isCodeComplete || isLoading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Confirming...' : 'Confirm'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function AuthenticationCodePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
          <div className="text-center text-slate-600">Loading...</div>
        </div>
      </div>
    }>
      <AuthenticationCodeContent />
    </Suspense>
  );
}
