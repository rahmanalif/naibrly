'use client';

import dynamic from 'next/dynamic';
import ServicesOffered from '@/components/User/Plumber-Profile/ServicesOffered';
import ReviewsSection from "@/components/User/Plumber-Profile/ReviewsSection";
import StickyForm from '@/components/User/Plumber-Profile/StickyForm';

// Dynamically import CaptainRooterProfile with SSR disabled to prevent hydration mismatch
const CaptainRooterProfile = dynamic(
  () => import('@/components/User/Plumber-Profile/CaptainRooterProfile'),
  { ssr: false }
);

export default function RepairsAndMaintenance() {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left content - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-8">
              <CaptainRooterProfile />
              <ServicesOffered />
              <ReviewsSection />
            </div>

            {/* Right sticky form - Takes 1 column on large screens */}
            <StickyForm />
          </div>
        </div>
      </div>
    )

}