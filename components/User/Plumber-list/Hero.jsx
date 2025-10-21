'use client';
import { MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function ServiceRequestSection() {
  return (
    <div className="relative w-full h-140 overflow-hidden">
      {/* Full background image with subtle blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/round.jpg')`,
        }}
      />

      {/* Dark gradient overlay + small blur to match the mood */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent backdrop-blur-sm" />

      {/* Right circular image (decorative) */}
      <div className="hidden lg:block absolute right-[-20rem] top-1/2 transform -translate-y-1/2">
        <div className="w-[1000px] h-[1000px] rounded-full overflow-hidden shadow-2xl">
          <img
            src="/round.jpg"
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

       {/* Dark Overlay on Left */}
      <div className="absolute left-0 top-0 w-2/5 h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-25">
        {/* Form Container - 599x225px */}
        <div className="w-[599px] space-y-4 mr-32">
          
          {/* Service Type Input */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-4 py-4 rounded-lg hover:bg-white/15 transition-colors">
            <FileText className="w-5 h-5 text-white/80 " />
            <Input
              placeholder="e.g. Housing cleaning"
              className="bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0 p-0 text-sm font-medium"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-4 py-4 rounded-lg hover:bg-white/15 transition-colors">
            <MapPin className="w-5 h-5 text-white/80 flex-shrink-0" />
            <Input
              placeholder="Reston, Virgin"
              className="bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0 p-0 text-sm font-medium"
            />
          </div>

          {/* Add New Request Button */}
          <Link href="/Plumbing">
          <Button 
            className="w-full h-15 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-b-sm text-base transition-colors border-0 mt-2"
          >
            Add New Request
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}