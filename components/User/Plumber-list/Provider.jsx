'use client';
import { useState } from 'react';
import { Star, MapPin, Clock, DollarSign, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const servicesData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
    title: "Plumbing Drain Repair, Plumbing Pipe Repair, Toilet Repair, Sink or Faucet Repair, Sink or Faucet Installation or Replacement, Water Heater Installation...",
    rating: "326 hires on Naibly",
    location: "Serves Chicago, IL",
    date: "18 Sep, 14:00",
    price: "$110 - $140",
    status: "waiting",
    providerName: "Jacob Malde"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop",
    title: "Electrical Wiring Installation, Circuit Breaker Replacement, Outlet Installation, Light Fixture Installation, Electrical Troubleshooting...",
    rating: "245 hires on Naibly",
    location: "Serves New York, NY",
    date: "19 Sep, 10:30",
    price: "$90 - $150",
    status: "accepted",
    providerName: "Sarah Johnson"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566537159309-bf41a9f0f08d?w=300&h=300&fit=crop",
    title: "HVAC Maintenance, AC Repair, Heating System Installation, Ductwork Cleaning, Thermostat Replacement...",
    rating: "412 hires on Naibly",
    location: "Serves Los Angeles, CA",
    date: "20 Sep, 09:00",
    price: "$120 - $200",
    status: "completed",
    providerName: "Mike Wilson",
    userRating: null,
    feedback: ""
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    title: "Drywall Installation, Painting Service, Wall Repair, Texture Application, Interior Finishing...",
    rating: "189 hires on Naibly",
    location: "Serves Houston, TX",
    date: "21 Sep, 15:45",
    price: "$80 - $120",
    status: "waiting",
    providerName: "Tom Anderson"
  }
];

export default function ServiceCards() {
  const [activeTab, setActiveTab] = useState('waiting');
  const [services, setServices] = useState(servicesData);
  const [ratings, setRatings] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const handleAccept = (serviceId) => {
    setServices(services.map(service =>
      service.id === serviceId ? { ...service, status: 'accepted' } : service
    ));
  };

  const handleCancel = (serviceId) => {
    if (window.confirm('Are you sure you want to cancel this service?')) {
      setServices(services.filter(service => service.id !== serviceId));
    }
  };

  const handleComplete = (serviceId) => {
    setServices(services.map(service =>
      service.id === serviceId ? { ...service, status: 'completed' } : service
    ));
  };

  const handleRatingChange = (serviceId, rating) => {
    setRatings({ ...ratings, [serviceId]: rating });
  };

  const handleFeedbackChange = (serviceId, feedback) => {
    setFeedbacks({ ...feedbacks, [serviceId]: feedback });
  };

  const handleSubmitFeedback = (serviceId) => {
    const rating = ratings[serviceId];
    const feedback = feedbacks[serviceId];

    console.log('Submitting feedback:', { serviceId, rating, feedback });

    setServices(services.map(service =>
      service.id === serviceId
        ? { ...service, userRating: rating, feedback: feedback }
        : service
    ));

    // Clear the form
    setRatings({ ...ratings, [serviceId]: null });
    setFeedbacks({ ...feedbacks, [serviceId]: '' });
  };

  const filteredServices = services.filter(service => {
    if (activeTab === 'waiting') return service.status === 'waiting';
    if (activeTab === 'accepted') return service.status === 'accepted';
    if (activeTab === 'completed') return service.status === 'completed';
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-4 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex border-b bg-white sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('waiting')}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'waiting'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Waiting
        </button>
        <button
          onClick={() => setActiveTab('accepted')}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'accepted'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Accept
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'completed'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Completed
        </button>
      </div>

      {/* Cards Container - Fixed height to prevent layout shift */}
      <div className="space-y-4 mt-4 min-h-[600px]">
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500">No services found in this category</p>
          </div>
        ) : (
          filteredServices.map((service) => (
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
                      {service.status === 'waiting' && (
                        <>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-600 border-green-300 hover:bg-green-100 cursor-pointer"
                            onClick={() => handleAccept(service.id)}
                          >
                            ✓ Accept
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-600 border-red-300 hover:bg-red-100 cursor-pointer"
                            onClick={() => handleCancel(service.id)}
                          >
                            ✕ Cancel
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 ml-1">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}

                      {service.status === 'accepted' && (
                        <>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-600 border-blue-300 hover:bg-blue-100 cursor-pointer"
                            onClick={() => handleComplete(service.id)}
                          >
                            ✓ Complete
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 ml-1">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}

                      {service.status === 'completed' && (
                        <>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-600 border-green-300"
                          >
                            ✓ Completed
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 ml-1">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Feedback Section for Completed Tasks */}
                  {service.status === 'completed' && !service.userRating && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Task Completed</h4>
                          <p className="text-sm text-gray-600">Average Rating and Feedback</p>
                          <p className="text-sm text-gray-500">{service.providerName}</p>
                        </div>

                        {/* Rating Stars */}
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Avg. Rating</p>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRatingChange(service.id, star)}
                                className="flex flex-col items-center gap-1 group"
                              >
                                <Star
                                  className={`w-8 h-8 cursor-pointer transition-colors ${
                                    (ratings[service.id] || 0) >= star
                                      ? 'fill-teal-500 text-teal-500'
                                      : 'text-gray-300 hover:text-teal-300'
                                  }`}
                                />
                                <span className="text-xs text-gray-500">
                                  {star === 1 ? 'Bad' : star === 2 ? 'Average' : star === 3 ? 'Good' : star === 4 ? 'Great' : 'Amazing'}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Feedback Textarea */}
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Feedback Note</p>
                          <Textarea
                            placeholder="Type here"
                            value={feedbacks[service.id] || ''}
                            onChange={(e) => handleFeedbackChange(service.id, e.target.value)}
                            className="min-h-[100px] resize-none"
                          />
                        </div>

                        {/* Done Button */}
                        <Button
                          onClick={() => handleSubmitFeedback(service.id)}
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                          disabled={!ratings[service.id]}
                        >
                          Done
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Show submitted feedback */}
                  {service.status === 'completed' && service.userRating && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Your Feedback</h4>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                service.userRating >= star
                                  ? 'fill-teal-500 text-teal-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">({service.userRating}/5)</span>
                        </div>
                        {service.feedback && (
                          <p className="text-sm text-gray-600 mt-2">{service.feedback}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}