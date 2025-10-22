'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CancelModal = ({ isOpen, onClose, onConfirm }) => {
  const [note, setNote] = useState('');

  const handleConfirm = () => {
    console.log('Cancel note:', note);
    onConfirm(note);
    setNote('');
    onClose();
  };

  const handleClose = () => {
    setNote('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center">
            <X className="w-10 h-10 text-red-500 stroke-[3]" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Are you sure!
          </h2>
          <p className="text-gray-600 text-sm">
            you want to cancel this order?
          </p>
        </div>

        {/* Note Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note why*
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type here"
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Cancel Button */}
        <Button
          onClick={handleConfirm}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-base rounded-lg font-medium"
        >
          Cancelled
        </Button>
      </div>
    </div>
  );
};

export default CancelModal;
