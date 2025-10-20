'use client';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Best User Review",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Best User Review",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Best User Review",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-[#F4F2F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-8 sm:mb-12 leading-tight">
            These reviews say it better.
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{review.name} -</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center sm:text-left px-2">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            "We found so many people on Naibrly, And those peoples are like our service and give wanderfull review. We are very grateful for your support".
          </p>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            –"Kevin"
          </p>
        </div>
      </div>
    </section>
  );
}