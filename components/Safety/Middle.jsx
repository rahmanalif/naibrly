'use client';
import { Heart, Home } from 'lucide-react';

export default function NaibrlyGuarantee() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 
          style={{
            color: '#404040',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: '36.7px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '44px'
          }}
          className="text-center mb-8"
        >
          Our Naibrly Guarantee.
        </h2>

        {/* Description */}
        <p 
          style={{
            color: '#404040',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: '20.2px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '28px'
          }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          We want you to be thrilled with every pro you find and every project you get done on Thumbtack, 
          but we know that life is unpredictable and pros are human. If anything happens, we'll work to make 
          it right through our <span className="text-teal-600 font-medium">Naibrly Guarantee</span>.
        </p>

        {/* Guarantees Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Money-Back Guarantee */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Heart className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 
                style={{
                  color: '#404040',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '28px'
                }}
              >
                Money-Back Guarantee
              </h3>
            </div>
            <p 
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              Our <span className="font-semibold">Money-Back Guarantee</span> covers circumstances where 
              you hire a pro on Thumbtack and the job doesn't get done, or it isn't done as agreed.
            </p>
            <p 
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              For example, if you hire a tiler who doesn't finish your backsplash, or the tiles fall off quickly, we can pay you 
              back up to $2,500. Be sure to <span className="font-semibold">notify us within 45 days</span>.
            </p>
          </div>

          {/* Property Damage Guarantee */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Home className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 
                style={{
                  color: '#404040',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '28px'
                }}
              >
                Property Damage Guarantee
              </h3>
            </div>
            <p 
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              If your Thumbtack pro was negligent and damaged your 
              property, we can cover you up to $100,000 through our 
              <span className="font-semibold"> Property Damage Guarantee</span>.
            </p>
            <p 
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              For example, if the tile installer you hired accidentally 
              breaks a window on the way out, <span className="font-semibold">notify us within 14 days</span> 
              so we can help.
            </p>
          </div>
        </div>

        {/* Privacy Section Title */}
        <h2 
          style={{
            color: '#404040',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: '36.7px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '44px'
          }}
          className="text-center"
        >
          Privacy at Naibrly.
        </h2>
      </div>
    </div>
  );
}