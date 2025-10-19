'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ReviewsSection() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1584622281867-8d4d1d07587f?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1584701821503-8c9cd36d4fef?w=200&h=200&fit=crop',
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const visiblePhotos = [
    photos[(currentPhotoIndex) % photos.length],
    photos[(currentPhotoIndex + 1) % photos.length],
    photos[(currentPhotoIndex + 2) % photos.length],
    photos[(currentPhotoIndex + 3) % photos.length],
    photos[(currentPhotoIndex + 4) % photos.length],
  ];

  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Reviews</h2>
        {/* Reviews Header */}
        <div className="mb-12">

          {/* Rating Summary */}
          <div className="flex items-start gap-8 mb-10">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">Exceptional 5.0</span>
                <span className="text-sm text-gray-500">2</span>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-green-600 text-green-600" />
                ))}
              </div>
              <p className="text-base text-gray-600">139 reviews</p>
            </div>

            {/* Rating Bars */}
            <div className="flex-1">
              {[
                { stars: 5, percent: 97, count: 4 },
                { stars: 4, percent: 3, count: 4 },
                { stars: 3, percent: 0, count: 0 },
                { stars: 2, percent: 0, count: 0 },
                { stars: 1, percent: 0, count: 0 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-600 w-4">{rating.stars}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${rating.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-6 text-right">
                    {rating.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="text-sm text-teal-600 hover:underline">
            Learn about our review guidelines.
          </a>
        </div>

        {/* Customer Photos */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Customer photos</h3>

          <div className="relative flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevPhoto}
              className="absolute -left-10 z-10"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2 overflow-hidden">
              {visiblePhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-200"
                >
                  <img
                    src={photo}
                    alt={`Customer photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextPhoto}
              className="absolute -right-10 z-10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <p className="text-xs text-gray-600 mt-3">Showing 1-5 of 139 reviews</p>
        </div>

        {/* Individual Review */}
        <div className="border-t pt-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
              P
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">Pedro G.</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-green-600 text-green-600" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">• Aug 15, 2025</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
                <Check size={14} className="text-green-600 flex-shrink-0" />
                <span>Hired on Nairbrly</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-800 mb-3 leading-relaxed">
            They responded within minutes of our inquiry and sent out someone the very next
            morning. Even, the <span className="font-semibold">plumber</span> who came out,
            was awesome - exactly the kind of professional we were looking for. Not only was
            he able to resolve the problems with the drains in our kitchen and bathroom, but
            he also was able to identify the underlying causes of our issues.{' '}
            <a href="#" className="text-teal-600 hover:underline">
              ...Read more
            </a>
          </p>

          <p className="text-xs text-gray-600 mb-4">
            Details: No, repair is not urgent • Only one drain has issues • Part of a larger
            issue with the plumbing system • Clogging • Slow draining • House
          </p>

          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <p className="text-xs font-semibold text-gray-900 mb-1">
              Chandlers Plumbing's reply
            </p>
            <p className="text-xs text-gray-700">
              We greatly appreciate your business and review! -Chandlers-
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-3">Plumbing Drain Repair</p>
        </div>
      </div>
    </div>
  );
}