'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Left Side - Profile Image and Name */}
          <div className="flex flex-col items-center md:items-start">
            {/* Profile Image with Edit Icon */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100">
                <Image
                  src="/provider/Ellipse  (1).png"
                  alt="Captain Rooter"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Edit Icon */}
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Profile Info */}
          <div className="flex-1">
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Captain Rooter
            </h1>

            {/* Rating and Hires */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              {/* Rating Box */}
              <div className="border border-gray-200 rounded-lg px-6 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-teal-600">5.0</span>
                </div>
                <div className="flex items-center gap-1">
                  {/* Star Rating */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-teal-600"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(139)</span>
                </div>
              </div>

              {/* Hires Box */}
              <div className="border border-gray-200 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">169</div>
                <div className="text-sm text-gray-600">hires</div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                We are the repipe, water heater and Trenchless pipe bursting drain experts. We offer
                FREE sewer camera inspections. Based in Northern California offering free estimates, fair
                rates, and superior workmanship. Our team has been servicing the Bay Area for over 15
                years. Our company is licensed, bonded, and insured. Our specialists are equ...
                <button className="text-teal-600 hover:text-teal-700 font-medium ml-1">
                  Read More
                </button>
              </p>
            </div>

            {/* Two Column Layout - Overview and Payment Methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Overview Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-3">
                  {/* Hired times */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                    <span className="text-gray-700">Hired 169 times</span>
                  </div>

                  {/* Similar jobs */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-gray-700">4 similar jobs done near you</span>
                  </div>

                  {/* Background checked */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <polyline points="17 11 19 13 23 9" />
                    </svg>
                    <span className="text-gray-700">Background checked</span>
                  </div>

                  {/* License verified */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-gray-700">License verified</span>
                  </div>

                  {/* Years in business */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-gray-700">10 years in business</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods and Top Pro Status Section */}
              <div className="space-y-6">
                {/* Payment Methods */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Payment methods</h2>
                  <p className="text-gray-700">
                    This pro accepts payments via Apple Pay, Cash, Check, Credit card, Google Pay,
                    Square cash app, and Venmo.
                  </p>
                </div>

                {/* Top Pro Status */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Top Pro status</h2>
                  <p className="text-gray-700">
                    Top Pros are among the highest-rated, most popular professionals on Thumbtack.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Business hours</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="space-y-2">
                  {/* Sunday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Sun</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Monday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Mon</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Tuesday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Tue</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Wednesday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Wed</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Thursday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Thu</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Friday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Fri</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                  {/* Saturday */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Sat</span>
                    <span className="text-gray-700">5:00 am - 11:59 pm</span>
                  </div>
                </div>
                {/* Read more link */}
                <button className="text-teal-600 hover:text-teal-700 font-medium mt-3 text-sm">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
