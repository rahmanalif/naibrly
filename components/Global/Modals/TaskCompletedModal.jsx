'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function TaskCompletedModal({ isOpen, onClose, onSubmit, providerName }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const ratings = [
    { value: 1, label: 'Bad' },
    { value: 2, label: 'Average' },
    { value: 3, label: 'Good' },
    { value: 4, label: 'Great' },
    { value: 5, label: 'Amazing' }
  ];

  const handleSubmit = () => {
    onSubmit({ rating, feedback });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0">
        <DialogTitle className="sr-only">Task Completed</DialogTitle>
        <div className="p-8 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 shadow-md">
            <Check className="w-10 h-10 text-teal-600" strokeWidth={3} />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Task Completed
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-6">
            Average Rating and Feedback<br />
            {providerName || 'Jacob Malcle'}
          </p>

          {/* Rating Section */}
          <div className="w-full mb-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-3">
              Avg. Rating
            </label>
            <div className="flex items-center justify-between gap-2">
              {ratings.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setRating(item.value)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    rating === item.value ? 'scale-110' : 'opacity-60'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      rating === item.value
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {rating === item.value ? (
                      <span className="text-2xl">★</span>
                    ) : (
                      <span className="text-lg font-semibold">{item.value}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-600">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Note */}
          <div className="w-full mb-6">
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Feedback Note
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Type here"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Done Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 rounded-lg font-medium"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
