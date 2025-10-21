'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Clock, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CaptainRooterProfile() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', label: 'Drain repair project' },
    { id: 2, src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', label: 'Pipe work' },
    { id: 3, src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', label: 'Project showcase' }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const visiblePhotos = [
    photos[currentPhotoIndex],
    photos[(currentPhotoIndex + 1) % photos.length],
    photos[(currentPhotoIndex + 2) % photos.length]
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 md:p-8">
        {/* Main Content */}
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  alt="Captain Rooter profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-2xl font-bold mb-4">Captain Rooter</h1>

                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    {/* Left side - Rating */}
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-bold text-[#0E7A60]">5.0</span>
                      <div className="flex flex-col items-start">
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <path d="M8.84575 5.74612L7.56075 1.75812C7.53932 1.68398 7.49438 1.61881 7.4327 1.57244C7.37101 1.52606 7.29593 1.50098 7.21875 1.50098C7.14158 1.50098 7.06649 1.52606 7.00481 1.57244C6.94313 1.61881 6.89818 1.68398 6.87675 1.75812L5.59175 5.74412L1.57675 5.79312C1.23075 5.79712 1.08775 6.25912 1.36475 6.47512L4.58675 8.98812L3.38975 13.0061C3.28675 13.3511 3.66175 13.6361 3.94275 13.4271L7.21875 10.9941L10.4948 13.4291C10.7768 13.6381 11.1508 13.3531 11.0478 13.0071L9.85075 8.99012L13.0728 6.47712C13.3498 6.26112 13.2068 5.80012 12.8618 5.79512L8.84575 5.74712V5.74612Z" fill="#0E7A60" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">(139)</span>
                      </div>
                    </div>

                    {/* Right side - Hires */}
                    <div className="text-center border-l border-gray-200 pl-4">
                      <span className="text-2xl font-bold text-gray-900 block">169</span>
                      <span className="text-sm text-gray-600 mt-1 block">hires</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* About */}
            <section>
              <h2 className="text-lg font-bold mb-3">About</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are the repipe, water heater and Trenchless pipe bursting drain experts. We offer FREE sewer camera inspections. Based in Northern California offering free estimates, fair rates, and superior workmanship. Our team has been servicing the bay Area for over 15 years. Our company is licensed, bonded, and insured. Our specialists are on-
                <button className="text-blue-600 hover:underline ml-1 font-medium">Read More</button>
              </p>
            </section>

            {/* Overview */}
            <section>
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">Hired 169 times</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">4 similar jobs done near you</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">Background checked</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">License verified</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">10 years in experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Hours Card */}
            <section className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Business hours</h2>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="text-gray-700 font-medium w-16">Sun</span>
                  <span className="text-gray-900">5:00 am - 11:59 pm</span>
                </div>
                <div className="flex">
                  <span className="text-gray-700 font-medium w-16">Mon</span>
                  <span className="text-gray-900">5:00 am - 11:59 pm</span>
                </div>
              </div>
              <button className="text-blue-600 hover:underline text-sm mt-3 font-medium">Read more</button>
            </section>

            {/* Request Quote Button */}
            <Button
              variant="outline"
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 font-medium"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Request a quote
            </Button>

            {/* Payment Methods & Top Pro */}
            

            {/* Projects and Media */}
            <section>
              <h2 className="text-lg font-bold mb-4">Projects and media</h2>
              <p className="text-sm text-gray-600 mb-4">217 photos</p>

              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="flex gap-3 overflow-hidden">
                  {visiblePhotos.map((photo, idx) => (
                    <div
                      key={photo.id}
                      className="relative w-64 sm:w-80 h-48 sm:h-56 flex-shrink-0 rounded overflow-hidden"
                    >
                      <img
                        src={photo.src}
                        alt={photo.label}
                        className="w-full h-full object-cover"
                      />
                      {idx === 2 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer">
                          <div className="text-center">
                            <p className="text-white font-semibold text-lg">See all</p>
                            <p className="text-white text-sm">(217)</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Photo Navigation */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Photo Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPhotoIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}