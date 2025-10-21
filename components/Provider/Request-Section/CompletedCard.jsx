'use client';

import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompletedCard = ({ request }) => {
  const {
    image,
    description,
    hires,
    location,
    date,
    time,
    price,
    customerName = 'Jacob Melcle'
  } = request;

  const [selectedRating, setSelectedRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const ratings = [
    { value: 1, label: 'Bad' },
    { value: 2, label: 'Average' },
    { value: 3, label: 'Good' },
    { value: 4, label: 'Great' },
    { value: 5, label: 'Amazing' }
  ];

  const handleDone = () => {
    console.log('Rating:', selectedRating);
    console.log('Feedback:', feedback);
    // Handle submission
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Top Section - Image and Info */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={image || '/placeholder-user.jpg'}
            alt="User profile"
            className="w-full sm:w-72 h-56 object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between py-2">
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Hires Info */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{hires} hires on Naibrly</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          {/* Date and Time */}
          <div className="text-gray-700 text-sm mb-4">
            Date: <span className="font-medium">{date}, {time}</span>
          </div>

          {/* Price and Status */}
          <div className="flex items-center justify-between">
            <div className="text-gray-700 text-sm">
              Hairing. price: <span className="font-semibold text-gray-900">{price}</span>
            </div>
            <span className="text-green-500 text-sm font-medium">• completed</span>
          </div>
        </div>
      </div>

      {/* Task Completed Section */}
      <div className="bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
          Task Completed
        </h3>
        <p className="text-sm text-gray-500 text-center mb-1">
          Average Rating and Feedback
        </p>
        <p className="text-sm text-gray-700 text-center mb-6">{customerName}</p>

        {/* Rating Section */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-4">Avg. Rating</p>
          <div className="flex justify-center items-end gap-6 sm:gap-10">
            {ratings.map((rating) => (
              <button
                key={rating.value}
                onClick={() => setSelectedRating(rating.value)}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                    selectedRating === rating.value
                      ? 'bg-teal-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedRating === rating.value ? (
                    <Star className="w-7 h-7 fill-white" />
                  ) : (
                    <span className="text-lg font-semibold">{rating.value}</span>
                  )}
                </div>
                <span className="text-xs text-gray-600">{rating.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Type here"
              className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>
        </div>

        {/* Done Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleDone}
            className="bg-teal-600 hover:bg-teal-700 text-white px-32 py-6 text-base rounded-lg font-medium shadow-md"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
