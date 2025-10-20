'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function RestonSection() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Icon circles */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="relative w-32 h-32">
            <Image src="/provider/Ellipse 3.svg" alt="background" fill style={{objectFit: "cover"}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/provider/Hammer.png" alt="Hammer" width={64} height={64} />
            </div>
          </div>
          <div className="relative w-32 h-32">
            <Image src="/provider/Ellipse 3 (1).svg" alt="background" fill style={{objectFit: "cover"}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/provider/Paint.png" alt="Paint" width={64} height={64} />
            </div>
          </div>
          <div className="relative w-32 h-32">
            <Image src="/provider/Ellipse 4.svg" alt="background" fill style={{objectFit: "cover"}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/provider/Sessor.png" alt="Sessor" width={64} height={64} />
            </div>
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