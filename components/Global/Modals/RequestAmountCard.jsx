'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function RequestAmountCard({ request, onCancel, onAccept, status = 'waiting' }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mt-6">
      <div className="flex gap-4">
        {/* Image */}
        <div className="shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={request.image}
              alt="Service"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with title and status */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Request Amount: <span className="text-teal-600">${request.amount}/consult</span>
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                {request.description}
              </p>
            </div>
            {status === 'accepted' && (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600 ml-2">
                • Complete
              </span>
            )}
          </div>

          {/* Price, Rating, and Date */}
          <div className="flex items-center gap-3 text-xs mb-3">
            <div>
              <span className="font-semibold text-gray-900">Avg. price: </span>
              <span className="text-gray-700">{request.avgPrice}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="font-medium text-gray-900">{request.rating}</span>
              <span className="text-gray-500">({request.reviews.toLocaleString()} reviews)</span>
            </div>
          </div>

          {/* Date */}
          <div className="text-xs text-gray-500 mb-3">
            Date : {request.date}
          </div>

          {/* Action Buttons */}
          {status === 'waiting' ? (
            <div className="flex gap-2">
              <Button
                onClick={onCancel}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 h-9 text-sm rounded-md"
              >
                Cancel
              </Button>
              <Button
                onClick={onAccept}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 h-9 text-sm rounded-md"
              >
                Accept
              </Button>
            </div>
          ) : (
            <div className="text-right">
              <span className="text-sm font-medium text-teal-600">Accepted</span>
            </div>
          )}
        </div>
      </div>

      {/* Status Message */}
      {status === 'waiting' && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Waiting for accepted</p>
        </div>
      )}
    </div>
  );
}
