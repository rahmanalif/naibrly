'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ReviewAndConfirm({ amount, onConfirm }) {
  const [tips, setTips] = useState(10);

  const total = amount + tips;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Review and confirm</h3>

      {/* Tips Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Tips</label>
          <span className="text-2xl font-semibold text-gray-900">${total}</span>
        </div>
        <input
          type="number"
          value={tips}
          onChange={(e) => setTips(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="$10"
          min="0"
        />
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span>Total:</span>
          <span className="font-semibold">${total}</span>
        </div>
      </div>

      {/* Confirm Button */}
      <Button
        onClick={() => onConfirm(total)}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 rounded-lg font-medium mb-4"
      >
        Confirm and payment
      </Button>

      {/* Terms & Condition */}
      <div className="text-center">
        <button className="text-sm text-gray-600 hover:text-gray-900 underline">
          Terms & Condition
        </button>
      </div>
    </div>
  );
}
