'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import box from "@/public/house.png";

export default function ProfessionalServicesSection() {
  const services = [
    { left: 'Repair and Installation', right: 'Plumbing' },
    { left: 'Maintenance', right: 'Budget-friendly' },
    { left: 'Home Security Services', right: 'Eco-friendly solutions' }
  ];

  return (
    <div className="min-h-8 bg-gradient-to-br from-gray-50 to-teal-50 py-16 px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Professional for your home services
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services
            </p>

            {/* Services Grid */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="grid grid-cols-2 gap-8">
                  {/* Left Service */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-teal-700 font-semibold text-base">
                      {service.left}
                    </span>
                  </div>

                  {/* Right Service */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-teal-700 font-semibold text-base">
                      {service.right}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl" style={{
              borderRadius: '50% 50% 20px 20px',
              clipPath: 'polygon(50% 0%, 100% 40%, 100% 100%, 0 100%, 0 38%)'
            }}>
              <Image
                src={box}
                alt="Professional roofing workers installing solar panels"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative dotted border */}
            <div 
              className="absolute -inset-4 border-2 border-dashed border-teal-300 pointer-events-none -z-10"
              style={{
                borderRadius: '50% 50% 20px 20px',
                clipPath: 'polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0 38%)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}