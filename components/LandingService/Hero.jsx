'use client';
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PlumbersSpecialty() {
  const specialties = [
    {
      id: 1,
      title: "Plumbing Pipe Repair",
      image: "/LandingService/image (1).png",
    },
    {
      id: 2,
      title: "Plumbing Drain Repair",
      image: "/LandingService/image (2).png",
    },
    {
      id: 3,
      title: "Plumbing Pipe Installation or Replacement",
      image: "/LandingService/image (3).png",
    },
    {
      id: 4,
      title: "Plumbing Inspection",
      image: "/LandingService/image (4).png",
    },
    {
      id: 5,
      title: "Water Heater Installation or Replacement",
      image: "/LandingService/image (5).png",
    },
    {
      id: 6,
      title: "Sink or Faucet Installation or Replacement",
      image: "/LandingService/image (6).png",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Plumbers near <span className="text-blue-500">Central</span>
        </h1>
        <p className="text-gray-600 text-sm">
          Narrow down your search by specialty
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty) => (
            <Card
              key={specialty.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="flex items-center h-28">
                <div
                  className=" w-32 h-32 relative group-hover:scale-105 transition-transform duration-300 ml-4"
                >
                  <Image src={specialty.image} alt={specialty.title} layout="fill" className="object-cover" />
                </div>
                <div className="flex-1 px-4 py-4">
                  <h3 className="text-base font-semibold text-gray-800 leading-tight">
                    {specialty.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
