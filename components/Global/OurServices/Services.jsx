'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function OurServicesSection() {
  const services = [
    {
      title: 'Appliance Repairs',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (1).png",
    },
    {
      title: 'House Cleaning',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (2).png",
    },
    {
      title: 'Window Washing',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (3).png",
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (4).png",
    },
    {
      title: 'Landscaping Design',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (5).png",
    },
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
    ,
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    },
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    },
    {
      title: 'TV Mounting',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      image: "/LandingService/image (6).png",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50 to-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Decorative dotted border container */}
        <div className="">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with padding */}
                <div className="pt-6 px-6">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8 py-6 text-base font-semibold"
            >
              Explore more service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}