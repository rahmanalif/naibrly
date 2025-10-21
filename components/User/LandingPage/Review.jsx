'use client';


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
                                      <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.84575 5.74612L7.56075 1.75812C7.53932 1.68398 7.49438 1.61881 7.4327 1.57244C7.37101 1.52606 7.29593 1.50098 7.21875 1.50098C7.14158 1.50098 7.06649 1.52606 7.00481 1.57244C6.94313 1.61881 6.89818 1.68398 6.87675 1.75812L5.59175 5.74412L1.57675 5.79312C1.23075 5.79712 1.08775 6.25912 1.36475 6.47512L4.58675 8.98812L3.38975 13.0061C3.28675 13.3511 3.66175 13.6361 3.94275 13.4271L7.21875 10.9941L10.4948 13.4291C10.7768 13.6381 11.1508 13.3531 11.0478 13.0071L9.85075 8.99012L13.0728 6.47712C13.3498 6.26112 13.2068 5.80012 12.8618 5.79512L8.84575 5.74712V5.74612Z" fill="#0E7A60"/>
                                      </svg>
                                    ))}
                                  </div>              </div>
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