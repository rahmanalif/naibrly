'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mike taylor',
      location: 'Lahore, Pakistan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Vitalli assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it'
    },
    {
      id: 2,
      name: 'Chris Thomas',
      location: 'CEO of Red Button',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'Exceptional service! The team was professional, efficient, and went above and beyond to ensure everything was perfect. Highly recommend their services to anyone looking for quality home care solutions.'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Amazing experience from start to finish. The technician arrived on time, was very knowledgeable, and completed the work efficiently. Will definitely use Naibrly again for future home service needs.'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
  const afterNextTestimonial = testimonials[(currentIndex + 2) % testimonials.length];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes slideForward {
          from {
            transform: translateX(40px) translateY(8px);
            opacity: 0.6;
          }
          to {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }
        .animate-slideForward {
          animation: slideForward 0.6s ease-out;
        }
      `}</style>

    <div className="bg-gray-100 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2
              style={{
                color: 'var(--Text-Primary-Text, #333)',
                fontFamily: 'var(--Family-Font, Inter)',
                fontSize: '72px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal'
              }}
            >
              What people say{' '}
              <span
                style={{
                  color: 'var(--Primary, #0E7A60)',
                  fontFamily: 'var(--Family-Font, Inter)',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                about Us.
              </span>
            </h2>

            <p className="text-gray-600 text-3xl leading-relaxed">
              Our Clients send us bunch of smiles with our services and we love them.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-gray-300 hover:border-teal-600 hover:bg-teal-50 w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNext}
                size="icon"
                className="rounded-full bg-teal-600 hover:bg-teal-700 text-white w-12 h-12"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Testimonial Card */}
          <div className="relative pl-16 pb-12">
            {/* Profile Image */}
            <div className="absolute top-1 left-0 z-20 transition-all duration-600">
              <img
                key={currentTestimonial.id}
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-24 h-24 rounded-full mb-16 border-4 shadow-lg object-cover animate-slideForward"
              />
            </div>

            {/* Main Testimonial Card */}
            <div className="relative bg-white rounded-2xl p-10 pl-20 shadow-xl z-10 transition-all duration-600">
              {/* Testimonial Text */}
              <div key={currentTestimonial.id} className="animate-slideForward">
                <p className="text-gray-800 text-lg font-medium leading-relaxed mb-8">
                  {currentTestimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400 text-base">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Ghost Card 1 - Middle Layer (Next Testimonial) */}
            <div className="absolute top-8 left-40 right-[-40px] h-[calc(100%-3rem)] bg-gray-200 rounded-2xl shadow-md z-[5] pointer-events-none transition-all duration-600 overflow-hidden">
              <div key={nextTestimonial.id} className="p-10 pl-20 transition-all duration-600">
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 opacity-60">
                  {nextTestimonial.text}
                </p>
                <div>
                  <h4 className="font-bold text-gray-700 text-xl mb-1">
                    {nextTestimonial.name}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {nextTestimonial.location}
                  </p>
                </div>
              </div>
            </div>
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-teal-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}