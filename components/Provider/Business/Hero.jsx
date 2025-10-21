'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function RestonSection() {
  return (
    <div className="w-full bg-white py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Icon circles */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="relative w-100 h-100">
            <Image src="/provider/design  (3).png" alt="background" fill style={{objectFit: "cover"}} />
          </div>
          <div className="relative w-100 h-100">
            <Image src="/provider/design  (2).png" alt="background" fill style={{objectFit: "cover"}} />
          </div>
          <div className="relative w-100 h-100">
            <Image src="/provider/design  (1).png" alt="background" fill style={{objectFit: "cover"}} />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Grow your business in Reston.
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-4xl text-center text-gray-700 mb-10">
          Over 30,000+ leads on Naibrly per day.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            className="w-full md:w-160 h-16 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-md transition-colors"
          >
            Sign up for free
          </Button>
        </div>
      </div>
    </div>
  );
}