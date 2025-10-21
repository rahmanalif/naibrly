'use client';
import { Card } from '@/components/ui/card';
import { ChevronRight, DollarSign, Users, CheckCircle } from 'lucide-react';

export default function PlumberReviews() {
  const reviews = [
    {
      author: 'Andro R.',
      service: 'Plumbing & Rooter Service (An...',
      rating: 5,
      text: 'Very good plumber, responded quickly!'
    },
    {
      author: 'Sanjay M.',
      service: 'Chandlers Plumbing',
      rating: 5,
      text: 'The 2 plumbers doing the actual work were very good.'
    },
    {
      author: 'Adam S.',
      service: 'Legacy plumbing & rooter inc',
      rating: 5,
      text: 'Hired to replace kitchen faucet, they quote $397. They sent a very novice plumber who (while working on the...'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: 'Free to use',
      description: 'You never pay to use Thumbtack: Get cost estimates, contact pros, and even book the job—all for no cost.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Compare prices side-by-side',
      description: "You'll know how much your project costs even before booking a pro."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Hire with confidence',
      description: "With access to 1M+ customer reviews and the pros' work history, you'll have all the info you need to make a hire."
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Reviews for plumbers on Naibrly</h2>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <Card key={idx} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">From {review.author}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <span className="inline-flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.84575 5.74612L7.56075 1.75812C7.53932 1.68398 7.49438 1.61881 7.4327 1.57244C7.37101 1.52606 7.29593 1.50098 7.21875 1.50098C7.14158 1.50098 7.06649 1.52606 7.00481 1.57244C6.94313 1.61881 6.89818 1.68398 6.87675 1.75812L5.59175 5.74412L1.57675 5.79312C1.23075 5.79712 1.08775 6.25912 1.36475 6.47512L4.58675 8.98812L3.38975 13.0061C3.28675 13.3511 3.66175 13.6361 3.94275 13.4271L7.21875 10.9941L10.4948 13.4291C10.7768 13.6381 11.1508 13.3531 11.0478 13.0071L9.85075 8.99012L13.0728 6.47712C13.3498 6.26112 13.2068 5.80012 12.8618 5.79512L8.84575 5.74712V5.74612Z" fill="#0E7A60"/>
                            </svg>
                          ))}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-800">{review.service}</p>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.84575 5.74612L7.56075 1.75812C7.53932 1.68398 7.49438 1.61881 7.4327 1.57244C7.37101 1.52606 7.29593 1.50098 7.21875 1.50098C7.14158 1.50098 7.06649 1.52606 7.00481 1.57244C6.94313 1.61881 6.89818 1.68398 6.87675 1.75812L5.59175 5.74412L1.57675 5.79312C1.23075 5.79712 1.08775 6.25912 1.36475 6.47512L4.58675 8.98812L3.38975 13.0061C3.28675 13.3511 3.66175 13.6361 3.94275 13.4271L7.21875 10.9941L10.4948 13.4291C10.7768 13.6381 11.1508 13.3531 11.0478 13.0071L9.85075 8.99012L13.0728 6.47712C13.3498 6.26112 13.2068 5.80012 12.8618 5.79512L8.84575 5.74712V5.74612Z" fill="#0E7A60"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-700">{review.text}</p>
                </Card>
              ))}
            </div>
            
            <button className="absolute right-0 top-1/2 transform translate-x-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow md:flex hidden items-center justify-center">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Why hire professionals on Naibrly?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}