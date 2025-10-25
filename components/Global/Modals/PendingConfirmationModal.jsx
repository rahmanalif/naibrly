'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function PendingConfirmationModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0">
        <div className="p-8 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <AlertCircle className="w-10 h-10 text-orange-500" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Please wait for the provider&apos;s confirmation
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-8 max-w-xs leading-relaxed">
            If not confirmed within 16:30 minutes, the request will be automatically cancelled, and you will be eligible to contact another provider for the same issue.
          </p>

          {/* Button */}
          <Button
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-lg font-medium"
          >
            Okay
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
