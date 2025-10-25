'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function RequestDropdown({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('open');

  // Mock data - replace with actual API call
  const requests = {
    open: [
      {
        id: 1,
        title: 'Window Washing',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop',
        avgPrice: '$55/hr',
        date: '18 Sep, 14:00',
        status: 'Accepted',
        statusColor: 'text-green-600'
      },
      {
        id: 2,
        title: 'Appliance Repairs',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=100&h=100&fit=crop',
        avgPrice: '$63/hr',
        date: '18 Sep, 14:00',
        status: 'Accepted',
        statusColor: 'text-green-600'
      },
      {
        id: 3,
        title: 'Appliance Repairs',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=100&h=100&fit=crop',
        avgPrice: '$63/hr',
        date: '18 Sep, 14:00',
        status: 'Pending',
        statusColor: 'text-orange-500'
      },
      {
        id: 4,
        title: 'Appliance Repairs',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=100&h=100&fit=crop',
        avgPrice: '$63/hr',
        date: '18 Sep, 14:00',
        status: 'Pending',
        statusColor: 'text-orange-500'
      }
    ],
    closed: []
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[110] max-h-[600px] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Your Request</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('open')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-all relative ${
            activeTab === 'open'
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            Open
            {activeTab === 'open' && (
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </div>
          {activeTab === 'open' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('closed')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-all relative ${
            activeTab === 'closed'
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Closed
          {activeTab === 'closed' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[450px] p-4">
        {requests[activeTab].length > 0 ? (
          <div className="space-y-3">
            {requests[activeTab].map((request) => (
              <div
                key={request.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-teal-300 transition-all cursor-pointer"
              >
                <div className="flex gap-3">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={request.image}
                      alt={request.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {request.title}
                      </h3>
                      <span className={`text-sm font-medium ${request.statusColor} flex items-center gap-1`}>
                        <div className={`w-2 h-2 rounded-full ${
                          request.status === 'Accepted' ? 'bg-green-600' : 'bg-orange-500'
                        }`}></div>
                        {request.status}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">
                        Avg. price: <span className="text-blue-600 font-medium">{request.avgPrice}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Date: {request.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No {activeTab} requests</p>
          </div>
        )}
      </div>
    </div>
  );
}
