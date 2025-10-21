'use client';
import React from 'react';

const End = () => {
  // Sample top pros data
  const topPros = [
    {
      id: 1,
      initial: 'R',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      name: 'Royal Flush Drain Cleaning & Plumbing Services',
      rating: 5.0,
      ratingLabel: 'Exceptional',
      reviewCount: 15,
      price: '$100/service call',
      priceLabel: 'Estimated price',
      services: 'Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...',
      badge: 'Great value',
      hires: 26,
      platform: 'Naibrly',
      testimonial: 'Rich W. says, "Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,'
    },
    {
      id: 2,
      initial: 'L',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      name: 'Loyal Flush Drain Cleaning & Plumbing Services',
      rating: 5.0,
      ratingLabel: 'Exceptional',
      reviewCount: 11,
      price: '$100/service call',
      priceLabel: 'Estimated price',
      services: 'Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...',
      badge: 'Great value',
      hires: 26,
      platform: 'Naibrly',
      testimonial: 'Rich W. says, "Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'fill-teal-600' : 'fill-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Top pros for your project
        </h2>

        {/* Top Pros List */}
        <div className="space-y-6">
          {topPros.map((pro, index) => (
            <div
              key={pro.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side - Avatar and Info */}
                <div className="flex gap-4 flex-1">
                  {/* Avatar Circle with Initial */}
                  <div className={`w-24 h-24 rounded-full ${pro.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-4xl font-bold ${pro.textColor}`}>
                      {pro.initial}
                    </span>
                  </div>

                  {/* Pro Details */}
                  <div className="flex-1">
                    {/* Number and Name */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        <span className="text-gray-600">{index + 1}.</span> {pro.name}
                      </h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-teal-600 font-semibold">{pro.ratingLabel} {pro.rating}</span>
                      {renderStars(pro.rating)}
                      <span className="text-sm text-gray-600">({pro.reviewCount})</span>
                    </div>

                    {/* Services */}
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {pro.services}
                    </p>

                    {/* Great Value Badge */}
                    <div className="inline-flex items-center gap-1 mb-3">
                      <span className="text-blue-600 font-semibold text-sm">$</span>
                      <span className="text-blue-600 font-semibold text-sm">{pro.badge}</span>
                    </div>

                    {/* Hires Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                      <span>{pro.hires} hires on {pro.platform}</span>
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-700 text-sm italic">
                      {pro.testimonial}
                    </p>
                  </div>
                </div>

                {/* Right Side - Price and Button */}
                <div className="flex flex-col items-end justify-between lg:w-48">
                  {/* Price */}
                  <div className="text-right mb-4">
                    <div className="text-xl font-bold text-gray-900 mb-1">
                      {pro.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      {pro.priceLabel}
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                    View profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default End;
