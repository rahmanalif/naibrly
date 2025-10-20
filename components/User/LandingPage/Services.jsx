'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, price, image }) => (
  <div className="flex flex-col">
    <div className="w-full h-40 sm:h-48 lg:h-56 bg-gray-300 rounded-lg overflow-hidden mb-3 sm:mb-4 flex items-center justify-center">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{title}</h3>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
      <p className="text-xs sm:text-sm text-gray-600">{price}</p>
    </div>
  </div>
);

const TrendingCard = ({ title, price, image }) => (
  <div className="relative rounded-xl overflow-hidden h-40 sm:h-48 group cursor-pointer">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 bg-white/20 backdrop-blur-md p-3 sm:p-4">
      <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
        <p className="text-white text-xs sm:text-sm">{price}</p>
      </div>
    </div>
  </div>
);

export default function NaibrlySection() {
  const topServices = [
    {
      title: 'House Interior Service',
      price: 'Avg. price: $110–$180 ($70–$120)',
  
  image: '/topServices/Image (3).png'
    },
    {
      title: 'Electronic Device Installation',
      price: 'Avg. price: $100–$180 ($80–$150)',
  image: '/topServices/Image (2).png'
    },
    {
      title: 'New Painting service',
      price: 'Avg. price: $200–$250 ($150–$190)',
  image: '/topServices/Image (1).png'
    }
  ];

  const trendingServices = [
    {
      title: 'House Cleaning',
      price: 'Avg. price: $110 – $140',
      image: '/trendingServices/Image (13).png'
    },
    {
      title: 'Electric service',
      price: 'Avg. price: $110 – $140',
      image: '/trendingServices/Image (12).png'
    },
    {
      title: 'Moving service',
      price: 'Avg. price: $70 – $200',
      image: '/trendingServices/Image (11).png'
    }
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Heading Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Get up to 25% big offer estimates.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            We analyzed millions of bids from Naibrly professionals to see what things really cost. Find out what other people have paid for projects like yours.
          </p>
        </div>

        {/* Top Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {topServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Trending Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Projects trending on Naibrly.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trendingServices.map((service, idx) => (
              <TrendingCard key={idx} {...service} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          <div className="flex-1 w-full">
            <div className="w-full bg-gray-300 rounded-lg h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Service Provider"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 w-full text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Built with Service Providers in Mind
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Join Naibrly to find customers in your area. Naibrly helps customers join together to save everyone time and money.
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-8 h-auto text-sm sm:text-base w-full sm:w-auto">
              Become a Naibrly Pro
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}