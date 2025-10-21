'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Clock, CheckCircle, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function CaptainRooterProfile() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [zipCode, setZipCode] = useState('94040');
  const [drainProblem, setDrainProblem] = useState('');
  const [urgency, setUrgency] = useState('');
  const [numDrains, setNumDrains] = useState('');

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

  const handleRequestEstimate = () => {
    if (!selectedService || !zipCode || !drainProblem || !urgency || !numDrains) {
      alert('Please fill in all fields');
      return;
    }
    console.log({ selectedService, zipCode, drainProblem, urgency, numDrains });
  };

  const visiblePhotos = [
    photos[currentPhotoIndex],
    photos[(currentPhotoIndex + 1) % photos.length],
    photos[(currentPhotoIndex + 2) % photos.length]
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
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

          {/* Right Section - Service Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4 shadow-md">
              <div className="flex items-center mb-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.50001 2C4.02001 2 2.00001 4.02 2.00001 6.5C1.99913 7.16391 2.14549 7.81976 2.42856 8.4203C2.71163 9.02085 3.12435 9.55114 3.63701 9.973L4.00001 10.273V12.569L6.76901 10.997L7.01401 11.001H9.50001C11.981 11.001 14 8.981 14 6.501C14 4.02 11.981 2 9.50001 2H6.50001ZM2.00001 16.002V11.19C1.36668 10.5842 0.862882 9.85623 0.519108 9.05007C0.175333 8.24392 -0.00126444 7.37639 6.81483e-06 6.5C6.81483e-06 2.917 2.91601 0 6.50001 0H9.50001C13.084 0 16 2.916 16 6.5C16 10.085 13.084 13.002 9.50001 13.002H7.23901L2.00001 16.002Z" fill="#2F3033" />
                </svg>
                <button className="ml-2 text-[#676D73] text-sm font-semibold hover:underline transition-colors">
                  Contact for price
                </button>
              </div>

              <div className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="text-[#2F3033] font-bold text-[13px] leading-[20px] mb-2 block">
                    Select a service
                  </label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Plumbing Drain Repair" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drain">Plumbing Drain Repair</SelectItem>
                      <SelectItem value="pipe">Pipe Repair</SelectItem>
                      <SelectItem value="heater">Water Heater</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="text-[#2F3033] font-bold text-[13px] leading-[20px] mb-2 block">
                    Zip code
                  </label>
                  <Input
                    type="text"
                    placeholder="94040"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="text-sm"
                  />
                </div>

                {/* Drain Problem */}
                <div>
                  <label className="text-[#2F3033] font-bold text-[13px] leading-[20px] mb-2 block">
                    Drain problem
                  </label>
                  <Select value={drainProblem} onValueChange={setDrainProblem}>
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select answer(s)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clogged">Clogged Drain</SelectItem>
                      <SelectItem value="burst">Burst Pipe</SelectItem>
                      <SelectItem value="slow">Slow Drainage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Repair Urgency */}
                <div>
                  <label className="text-[#2F3033] font-bold text-[13px] leading-[20px] mb-2 block">
                    Repair urgency
                  </label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select answer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="soon">Soon</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Drains */}
                <div>
                  <label className="text-[#2F3033] font-bold text-[13px] leading-[20px] mb-2 block">
                    Number of issue drains
                  </label>
                  <Select value={numDrains} onValueChange={setNumDrains}>
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select answer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one">1</SelectItem>
                      <SelectItem value="two">2</SelectItem>
                      <SelectItem value="three">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Request Estimate Button */}
                <Button
                  onClick={handleRequestEstimate}
                  className="w-full bg-[#0E7A60] hover:bg-teal-500 text-white font-medium transition-colors"
                >
                  Request estimate
                </Button>

                {/* Online Now */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-700">
                    <span className="inline-block w-2 h-2 bg-teal-600 rounded-full mr-2 animate-pulse"></span>
                    <span>Online now</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}