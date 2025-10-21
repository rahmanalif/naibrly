'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import EditProfile from '@/components/User/Modals/EditProfile';

export default function ProfileServicesSection() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      category: "Last Hair Provider",
      name: "Royal Flush Drain Cleaning & Plumbing Services",
      rating: 5.0,
      reviews: 15,
      price: "$100/service call",
      description: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "26 hires on Naibily"
    },
    {
      id: 2,
      category: "Previous month Hair Provider",
      name: "Royal Flush Moving Services",
      rating: 5.0,
      reviews: 15,
      price: "$200/service call",
      description: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "26 hires on Naibily"
    },
    {
      id: 3,
      category: "Previous month Hair Provider",
      name: "Royal Flush Moving Services",
      rating: 5.0,
      reviews: 15,
      price: "$200/service call",
      description: "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or...",
      hires: "26 hires on Naibily"
    }
  ];

  return (
    <>
      <div className="flex gap-8 px-16 py-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
        {/* Left Profile Card */}
        <div className="w-96 flex-shrink-0">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white overflow-hidden mb-4 border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Kevin"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Kevin</h2>
              <p className="text-sm text-gray-600">Home owner</p>
            </div>

            <CardContent className="p-0">
              <div className="border-b">
                <button className="w-full py-3 text-left px-6 font-medium bg-white border-b-2 border-teal-600">
                  About
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <User className="w-5 h-5 text-gray-400" />
                  <span>Kevin</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>(+888) 000 000000</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">kevin********@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">123 Oak Street Springfield, IL 62704</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span>Zip: 62704</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>Joined: SEP 25, 2025</span>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Services List */}
        <div className="flex-1 space-y-6">
          {services.map((service, index) => (
            <div key={service.id} className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-1 rounded-full border-gray-300 text-gray-600">
                {service.category}
              </Badge>

              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex-shrink-0" />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {index + 1}. {service.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-teal-600 font-semibold">Exceptional {service.rating}</span>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-teal-600">★</span>
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">({service.reviews})</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-semibold text-gray-900">{service.price}</div>
                          <div className="text-xs text-gray-500">Estimated price</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-teal-600">🏆</span>
                          <span>{service.hires}</span>
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
                          View profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <EditProfile isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
    </>
  );
}