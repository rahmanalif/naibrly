'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Clock, CheckCircle, Users, FileText, Star } from 'lucide-react';
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
                <h1 className="text-3xl md:text-2xl font-bold mb-2">Captain Rooter</h1>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0</span>
                  <span className="text-sm text-gray-600">(138)</span>
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">169</span>
                  <span className="text-gray-600"> Hires</span>
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

            {/* Business Hours */}
            <section>
              <h2 className="text-lg font-bold mb-3">Business hours</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Sun</span>
                  <span className="text-gray-900 font-medium">5:00 am - 11:59 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mon</span>
                  <span className="text-gray-900 font-medium">5:00 am - 11:59 pm</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-sm mb-2">Payment methods</h3>
                <p className="text-xs text-gray-600 leading-relaxed">This pro accepts payments via Apple Pay, Cash, Check, Credit card, Google Pay, Square cash app, and Venmo.</p>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2">Top Pro status</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Top Pros are among the highest-rated, most popular professionals on Thumbtack.</p>
              </div>
            </div>

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
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
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
              <button className="w-full mb-6 text-blue-600 text-sm font-semibold hover:underline transition-colors">
                Contact for price
              </button>

              <div className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">
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
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">
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
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">
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
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">
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
                  <label className="text-xs font-semibold text-gray-700 mb-2 block">
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
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
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