'use client';

import { ChevronRight, DollarSign, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PlumberReviews() {
  const reviews = [
    {
      name: 'Andro R.',
      company: 'Plumbing & Rooter Service (An...',
      rating: 5,
      text: 'Very good plumber, responded quickly!',
      highlighted: 'plumber'
    },
    {
      name: 'Sanjay M.',
      company: 'Chandlers Plumbing',
      rating: 5,
      text: 'The 2 plumbers doing the actual work were very good.',
      highlighted: 'plumbers'
    },
    {
      name: 'Adam S.',
      company: 'Legacy plumbing & rooter inc',
      rating: 5,
      text: 'Hired to replace kitchen faucet, they quote $397. They sent a very novice plumber who (while working on the...',
      highlighted: 'plumber'
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Free to use',
      text: 'You never pay to use Thumbtack: Get cost estimates, contact pros, and even book the job—all for no cost.'
    },
    {
      icon: Users,
      title: 'Compare prices side-by-side',
      text: "You'll know how much your project costs even before booking a pro."
    },
    {
      icon: CheckCircle2,
      title: 'Hire with confidence',
      text: "With access to 1M+ customer reviews and the pros' work history, you'll have all the info you need to make a hire."
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.84575 5.74612L7.56075 1.75812C7.53932 1.68398 7.49438 1.61881 7.4327 1.57244C7.37101 1.52606 7.29593 1.50098 7.21875 1.50098C7.14158 1.50098 7.06649 1.52606 7.00481 1.57244C6.94313 1.61881 6.89818 1.68398 6.87675 1.75812L5.59175 5.74412L1.57675 5.79312C1.23075 5.79712 1.08775 6.25912 1.36475 6.47512L4.58675 8.98812L3.38975 13.0061C3.28675 13.3511 3.66175 13.6361 3.94275 13.4271L7.21875 10.9941L10.4948 13.4291C10.7768 13.6381 11.1508 13.3531 11.0478 13.0071L9.85075 8.99012L13.0728 6.47712C13.3498 6.26112 13.2068 5.80012 12.8618 5.79512L8.84575 5.74712V5.74612Z" fill="#0E7A60"/>
        </svg>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reviews for plumbers on Naibrly</h1>
          <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
            See More
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="p-6 border border-gray-200">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">From {review.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
                      alt={review.name}
                      className="w-5 h-5 rounded-full"
                    />
                    <p className="text-sm font-medium text-gray-900">{review.company}</p>
                  </div>
                </div>
                
                <StarRating rating={review.rating} />
                
                <p className="text-sm text-gray-700">
                  {review.text.split(review.highlighted).map((part, i) => (
                    i === 0 ? (
                      <span key={i}>{part}</span>
                    ) : (
                      <span key={i}>
                        <span className="font-semibold text-gray-900">{review.highlighted}</span>
                        {part}
                      </span>
                    )
                  ))}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Info text */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-sm">
            There are <span className="font-semibold">***</span> five star Plumbers in on Thumbtack.
          </p>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Why hire professionals on Naibrly?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <IconComponent size={28} className="text-teal-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}