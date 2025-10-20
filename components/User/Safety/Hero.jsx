'use client';
import { useState } from 'react';

export default function SupportSection() {
  const [imagePath] = useState('/api/placeholder/560/318');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 
            className="font-bold leading-tight"
            style={{
              color: '#404040',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '68.5px',
              lineHeight: '79.2px',
              letterSpacing: '-0.5px'
            }}
          >
            How we're committed to<br />your Support.
          </h1>
        </div>

        {/* Image Container */}
        <div className="flex justify-center mb-12">
          <div
            className="rounded-[24px]"
            style={{
              width: '560px',
              height: '318px',
              backgroundImage: `url('${imagePath}')`,
              backgroundColor: '#D9D9D9',
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        {/* Content Section */}
        <div className="text-center space-y-6">
          {/* Main Description */}
          <p 
            style={{
              color: '#999',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '24.2px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '32px'
            }}
          >
            The safety, security and well-being of our Thumbtack community is a top priority. 
            Our goal is to connect all of our customers with trustworthy and reliable pros who 
            get the job done right.
          </p>

          {/* Secondary Heading */}
          <p 
            style={{
              color: '#999',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '22.7px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '32px'
            }}
          >
            Here are some ways we're dedicated to making sure that happens.
          </p>
        </div>
      </div>
    </div>
  );
}