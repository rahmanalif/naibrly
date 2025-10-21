'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Middle = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReadMore = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Pedro G.",
      avatar: "/provider/Ellipse  (2).png",
      rating: 5,
      date: "Aug 15, 2025",
      hiredOn: "Naibrly",
      review: "They responded within minutes of our inquiry and sent out someone the very next morning. Evan, the plumber who came out, was awesome - exactly the kind of professional we were looking for. Not only was he able to resolve the problems with the drains in our kitchen and bathroom, but he also was able to identify the underlying causes of our issues and provide recommendations for preventing future problems. The work was completed quickly and efficiently, and the pricing was very fair. I highly recommend Captain Rooter and will definitely use them again for any future plumbing needs."
    },
    {
      id: 2,
      name: "Pedro G.",
      avatar: "/provider/Ellipse  (2).png",
      rating: 5,
      date: "Aug 15, 2025",
      hiredOn: "Naibrly",
      review: "They responded within minutes of our inquiry and sent out someone the very next morning. Evan, the plumber who came out, was awesome - exactly the kind of professional we were looking for. Not only was he able to resolve the problems with the drains in our kitchen and bathroom, but he also was able to identify the underlying causes of our issues and provide recommendations for preventing future problems. The work was completed quickly and efficiently, and the pricing was very fair. I highly recommend Captain Rooter and will definitely use them again for any future plumbing needs."
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
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
        {/* Reviews Section */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name, Rating, Date */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {review.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-600">"</span>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>

                  {/* Hired on Badge */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Hired on {review.hiredOn}</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="ml-16">
                <p className="text-gray-700 leading-relaxed">
                  {expandedReviews[index]
                    ? review.review
                    : `${review.review.slice(0, 250)}...`}
                  {review.review.length > 250 && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-teal-600 hover:text-teal-700 font-medium ml-1"
                    >
                      {expandedReviews[index] ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </p>
              </div>
            </div>
          ))}

          {/* See More Button */}
          <div className="flex justify-center pt-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
