'use client';

import React, { useState } from 'react';
import { MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CancelModal from './CancelModal';

const RequestCard = ({ request }) => {
  const {
    image,
    description,
    hires,
    location,
    date,
    time,
    priceRange,
    status = 'pending'
  } = request;

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsCancelModalOpen(true);
  };

  const handleCancelConfirm = (note) => {
    console.log('Order cancelled with note:', note);
    // Handle the cancel logic here (e.g., API call)
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={image || '/placeholder-user.jpg'}
            alt="User profile"
            className="w-full sm:w-60 h-48 sm:h-44 object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {description}
          </p>

          {/* Hires Info */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <Users className="w-4 h-4" />
            <span className="font-medium">{hires} hires on Naibrly</span>
            <span className="text-blue-400">💧</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          {/* Date and Time */}
          <div className="text-gray-700 text-sm mb-3">
            Date: <span className="font-medium">{date}, {time}</span>
          </div>

          {/* Price and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-gray-700 text-sm">
              Hairing. price: <span className="font-semibold text-gray-900">{priceRange}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {status === 'pending' && (
                <>
                  <Button
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 text-sm px-4"
                  >
                    • Pending
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleCancelClick}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 text-sm px-4"
                  >
                    • Cancel
                  </Button>
                </>
              )}
              {status === 'accepted' && (
                <Button
                  variant="ghost"
                  className="text-green-500 hover:text-green-600 hover:bg-green-50 text-sm px-4"
                >
                  • Accept
                </Button>
              )}
              {status === 'completed' && (
                <Button
                  variant="ghost"
                  className="text-green-500 hover:text-green-600 hover:bg-green-50 text-sm px-4"
                >
                  • completed
                </Button>
              )}
              <Button
                variant="ghost"
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50 text-sm px-4 flex items-center gap-1"
              >
                💬 Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Modal */}
      <CancelModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleCancelConfirm}
      />
    </div>
  );
};

export default RequestCard;
