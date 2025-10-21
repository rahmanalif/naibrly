'use client';
import { Star, MapPin, Clock, DollarSign, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
    title: "Plumbing Drain Repair, Plumbing Pipe Repair, Toilet Repair, Sink or Faucet Repair, Sink or Faucet Installation or Replacement, Water Heater Installation...",
    rating: "326 hires on Naidify",
    location: "Serves Chicago, IL",
    date: "18 Sep, 14:00",
    price: "$110 - $140",
    status: "pending"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop",
    title: "Electrical Wiring Installation, Circuit Breaker Replacement, Outlet Installation, Light Fixture Installation, Electrical Troubleshooting...",
    rating: "245 hires on Naidify",
    location: "Serves New York, NY",
    date: "19 Sep, 10:30",
    price: "$90 - $150",
    status: "pending"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566537159309-bf41a9f0f08d?w=300&h=300&fit=crop",
    title: "HVAC Maintenance, AC Repair, Heating System Installation, Ductwork Cleaning, Thermostat Replacement...",
    rating: "412 hires on Naidify",
    location: "Serves Los Angeles, CA",
    date: "20 Sep, 09:00",
    price: "$120 - $200",
    status: "pending"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    title: "Drywall Installation, Painting Service, Wall Repair, Texture Application, Interior Finishing...",
    rating: "189 hires on Naidify",
    location: "Serves Houston, TX",
    date: "21 Sep, 15:45",
    price: "$80 - $120",
    status: "pending"
  }
];

export default function ServiceCards() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Tabs */}
      <div className="flex border-b bg-white">
        <button className="px-6 py-3 text-sm font-medium text-teal-600 border-b-2 border-teal-600">
          Waiting
        </button>
        <button className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800">
          Accept
        </button>
        <button className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-800">
          Completed
        </button>
      </div>

      {/* Cards Container */}
      <div className="space-y-4 mt-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-40 rounded-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-gray-800 font-medium mb-3 line-clamp-2">
                  {service.title}
                </h3>

                {/* Details Grid */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service.rating}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{service.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Date: {service.date}</span>
                  </div>
                </div>

                {/* Bottom Row - Price and Actions */}
                <div className="flex items-center justify-between">
                  {/* Price */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Avg. price: <span className="font-medium text-gray-800">{service.price}</span></span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-300 hover:bg-orange-50 cursor-pointer">
                      ◆ Pending
                    </Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-600 border-red-300 hover:bg-red-50 cursor-pointer">
                      ✕ Cancel
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 ml-1">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}