'use client';

import React, { useState } from 'react';
import RequestCard from './RequestCard';
import CompletedCard from './CompletedCard';

const RequestSection = () => {
  const [activeTab, setActiveTab] = useState('wating'); // Note: keeping 'wating' spelling as shown in image

  // Sample data - replace with real data from API
  const sampleRequests = {
    wating: [
      {
        id: 1,
        image: '/Request/req.jpg',
        description: 'I want to hire a plumber in my house have some water problem. need some fix.',
        hires: 30,
        location: '13th Street 47 W 13th St, New York, NY 10011, USA',
        date: '18 Sep',
        time: '14:00',
        priceRange: '$110 - $140',
        status: 'pending'
      },
      // Add more requests as needed
    ],
    accept: [
      {
        id: 2,
        image: '/Request/req.jpg',
        description: 'I want to hire a plumber in my house have some water problem. need some fix.',
        hires: 30,
        location: '13th Street 47 W 13th St, New York, NY 10011, USA',
        date: '18 Sep',
        time: '14:00',
        priceRange: '$110',
        status: 'accepted'
      },
    ],
    completed: [
      {
        id: 3,
        image: '/Request/req.jpg',
        description: 'I want to hire a plumber in my house have some water problem. need some fix.',
        hires: 30,
        location: '13th Street 47 W 13th St, New York, NY 10011, USA',
        date: '18 Sep',
        time: '14:00',
        price: '$110',
        customerName: 'Jacob Melcle'
      },
    ]
  };

  const tabs = [
    { id: 'wating', label: 'Wating' },
    { id: 'accept', label: 'Accept' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 text-base sm:text-lg font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Request Cards */}
      <div className="space-y-6">
        {sampleRequests[activeTab]?.length > 0 ? (
          sampleRequests[activeTab].map((request) => (
            activeTab === 'completed' ? (
              <CompletedCard key={request.id} request={request} />
            ) : (
              <RequestCard key={request.id} request={request} />
            )
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No requests found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestSection;
