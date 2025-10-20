'use client';

import { useState } from 'react';
import { X, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotificationModal({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'jinia loris',
      location: '13th Street 47 W 13th St, New York, NY 10011, USA',
      profileImage: '/logo.png',
      status: 'pending' // pending, accepted, rejected
    },
    {
      id: 2,
      name: 'jinia loris',
      location: '13th Street 47 W 13th St, New York, NY 10011, USA',
      profileImage: '/logo.png',
      status: 'pending'
    }
  ]);

  const handleAccept = (notificationId) => {
    setNotifications(notifications.map(notif =>
      notif.id === notificationId ? { ...notif, status: 'accepted' } : notif
    ));
  };

  const handleReject = (notificationId) => {
    setNotifications(notifications.map(notif =>
      notif.id === notificationId ? { ...notif, status: 'rejected' } : notif
    ));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-lg animate-in zoom-in-95 duration-200">
        <div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden">
          {/* Header */}
          <div className="bg-white px-6 py-5 border-b border-gray-100">
            <h2 className="text-center text-xl font-semibold text-gray-900">Notification</h2>
          </div>

          {/* Description */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              "This is a great offer for you. If more than one of you use the app together to place an order, you will get up to 7% discount. Anyone within a 5 km radius can join."
            </p>
          </div>

          {/* Notifications List */}
          <div className="px-6 py-5 max-h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                >
                  {/* User Info */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Profile Image */}
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={notification.profileImage}
                        alt={notification.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* User Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {notification.name}
                      </h3>
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {notification.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-3">
                    {notification.status === 'pending' && (
                      <Button
                        onClick={() => handleAccept(notification.id)}
                        className="bg-white text-green-600 border border-green-600 hover:bg-green-50 px-4 py-1.5 rounded-md text-sm font-medium transition-colors h-auto flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        Accept
                      </Button>
                    )}
                    {notification.status === 'accepted' && (
                      <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                        <Check className="w-4 h-4" />
                        Accepted
                      </div>
                    )}
                    {notification.status === 'rejected' && (
                      <div className="text-red-600 text-sm font-medium">
                        Rejected
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
