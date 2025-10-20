'use client';

import { Star, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PlumbersSection() {
  const plumbers = [
    {
      id: 1,
      name: "Loyal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 31,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "36 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "L",
      bgColor: "bg-purple-100"
    },
    {
      id: 2,
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 28,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "28 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "U",
      bgColor: "bg-blue-100"
    },
    {
      id: 3,
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 42,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "52 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "O",
      bgColor: "bg-amber-100"
    },
    {
      id: 4,
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 22,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "21 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "P",
      bgColor: "bg-pink-100"
    },
    {
      id: 5,
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 4.9,
      reviews: 19,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "19 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "Q",
      bgColor: "bg-cyan-100"
    },
    {
      id: 6,
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 35,
      price: "$100/service call",
      services: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "40 hires on Nairly",
      review: "Rich W. says, \"Caleb with Royal Flush Drain Cleaning kept to his word and provided outstanding plumbing service for my residence. Communication,",
      initials: "D",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <span>Nairly</span>
        <ChevronRight size={16} />
        <span className="font-medium text-gray-900">Plumbing</span>
      </div>

      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Plumbers near you</h1>
        <p className="text-gray-600 text-lg">
          Plumbers often repair clogged drains, leaky faucets, or faulty water heaters — helping protect your home from water damage and keep your systems running smoothly.
        </p>
      </div>

      {/* Top Pros Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Top pros for your project</h2>

        {/* Plumber Cards */}
        <div className="space-y-6">
          {plumbers.map((plumber, index) => (
            <Card key={plumber.id} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-6">
                {/* Avatar */}
                <div className={`${plumber.bgColor} w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-3xl font-semibold text-gray-700">{plumber.initials}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title and Rating */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{index + 1}. {plumber.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">Exceptional {plumber.rating}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                        ))}
                      </div>
                      <span className="text-gray-600">({plumber.reviews})</span>
                    </div>
                  </div>

                  {/* Services */}
                  <p className="text-gray-600 text-sm mb-3">{plumber.services}</p>

                  {/* Hires Badge */}
                  <div className="flex items-center gap-2 text-sm text-teal-700 mb-3">
                    <MapPin size={16} />
                    <span className="font-medium">{plumber.hires}</span>
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm">{plumber.review}</p>
                </div>

                {/* Right Side - Price and Button */}
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right mb-auto">
                    <p className="text-xl font-bold text-gray-900">{plumber.price}</p>
                    <p className="text-xs text-gray-500">Estimated price</p>
                  </div>
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                    View profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}