'use client';

import { MapPin, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plumbers = [
  {
    id: 1,
    name: 'Captain Rooter Emergency Plumbers Chicago',
    rating: 5.0,
    reviews: 233,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    services: 'Plumbing Drain Repair, Plumbing Pipe Repair, Toilet Repair, Sink or Faucet Repair, Sink or Faucet Installation or Replacement, Water Heater Installation...',
    hires: 326,
    location: 'Chicago, IL',
    response: 'about 1 min',
    review: {
      author: 'Linda W.',
      text: 'This is a good company the receptionist on the phone was helpful and kind, and Oz the Plumber was friendly and professional...'
    }
  },
  {
    id: 2,
    name: 'Pro Plumbing Solutions',
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    services: 'Emergency Plumbing, Pipe Leaks, Water Damage Restoration, Sewer Line Repair, Fixture Installation, Emergency Service Available 24/7...',
    hires: 412,
    location: 'Chicago, IL',
    response: 'about 2 min',
    review: {
      author: 'John D.',
      text: 'Fast response, professional team, and fair pricing. They fixed our main line issue quickly without any hassle...'
    }
  },
  {
    id: 3,
    name: 'Chicago Flow Plumbing',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1507539899975-15ae01dd6949?w=200&h=200&fit=crop',
    services: 'Drain Cleaning, Water Heater Repair & Replacement, Bathroom Remodeling, Kitchen Plumbing, Gas Line Installation...',
    hires: 287,
    location: 'Chicago, IL',
    response: 'about 3 min',
    review: {
      author: 'Sarah M.',
      text: 'Excellent workmanship and very knowledgeable staff. They explained everything clearly and the work was done right...'
    }
  },
  {
    id: 4,
    name: 'Emergency Plumbing Plus',
    rating: 4.9,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    services: 'Toilet Repair & Replacement, Faucet Repair, Garbage Disposal Installation, Water Softening Systems, Backflow Prevention...',
    hires: 356,
    location: 'Chicago, IL',
    response: 'about 1 min',
    review: {
      author: 'Mike T.',
      text: 'Called on a Sunday and they came out same day. Professional, courteous, and fixed the problem on first visit...'
    }
  },
  {
    id: 5,
    name: 'Northside Plumbing Experts',
    rating: 4.7,
    reviews: 144,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
    services: 'Hydro Jetting, Trenchless Sewer Repair, Water Line Repair, Sump Pump Installation, Commercial Plumbing Services...',
    hires: 268,
    location: 'Chicago, IL',
    response: 'about 4 min',
    review: {
      author: 'Patricia L.',
      text: 'Very thorough inspection and honest assessment. They did not oversell services and were very fair with pricing...'
    }
  },
  {
    id: 6,
    name: 'Swift Plumbing Services',
    rating: 5.0,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    services: 'All Plumbing Repairs, New Construction Plumbing, Repiping Services, Radiant Floor Heating, Tankless Water Heaters...',
    hires: 398,
    location: 'Chicago, IL',
    response: 'about 2 min',
    review: {
      author: 'Robert H.',
      text: 'Best plumbers in the city. Professional, punctual, and they warranty their work. Highly recommended!...'
    }
  }
];

export default function PlumberProfiles() {
  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Top Plumbers in Chicago</h1>
        
        <div className="space-y-8">
          {plumbers.map((plumber) => (
            <div key={plumber.id} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="lg:col-span-2">
                  <div className="flex gap-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={plumber.image}
                        alt={plumber.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                      />
                    </div>

                    {/* Company Info */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-gray-900">
                          {plumber.name}
                        </h2>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">★</span>
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">Great {plumber.rating}</span>
                        <span className="text-gray-500 text-sm">({plumber.reviews})</span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {plumber.services}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-gray-500" />
                          <span>{plumber.hires} hires on Naibriy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <span>Serves {plumber.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <span>Responds in {plumber.response}</span>
                        </div>
                      </div>

                      {/* Review */}
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{plumber.review.author} says,</span> "{plumber.review.text}"
                          <button className="text-green-600 hover:text-green-700 ml-2 font-semibold text-sm">
                            See more
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Call to Action */}
                <div className="flex flex-col justify-start gap-4">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-3">Free service call</p>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 rounded-lg text-base"
                  >
                    View profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}