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
                            <span key={i} className="text-teal-500">★</span>
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
                      <span key={i} className="text-teal-500 text-lg">★</span>
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