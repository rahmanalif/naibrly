'use client';

import { useState } from 'react';
import { X, MapPin, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotificationModal({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'jinia loris',
      location: '13th Street 47 W 13th St, New York, NY 10011, USA',
      profileImage: '/logo.png',
      status: 'pending'
    },
    {
      id: 2,
      name: 'jinia loris',
      location: '13th Street 47 W 13th St, New York, NY 10011, USA',
      profileImage: '/logo.png',
      status: 'pending'
    }
  ]);

  const [showProblemModal, setShowProblemModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [problemText, setProblemText] = useState('');

  const handleAccept = (notificationId) => {
    setSelectedNotification(notificationId);
    setShowProblemModal(true);
  };

  const handleReject = (notificationId) => {
    setNotifications(notifications.map(notif =>
      notif.id === notificationId ? { ...notif, status: 'rejected' } : notif
    ));
  };

  const handleProblemSubmit = () => {
    setShowProblemModal(false);
    setShowConfirmationModal(true);
  };

  const handleFinalConfirm = (action) => {
    if (action === 'accept') {
      setNotifications(notifications.map(notif =>
        notif.id === selectedNotification ? { ...notif, status: 'accepted' } : notif
      ));
    }
    setShowConfirmationModal(false);
    setSelectedNotification(null);
    setProblemText('');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Notification Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative z-10 w-full max-w-lg animate-in zoom-in-95 duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden">
            <div className="bg-white px-6 py-5 border-b border-gray-100">
              <h2 className="text-center text-xl font-semibold text-gray-900">Notification</h2>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                "This is a great offer for you. If more than one of you use the app together to place an order, you will get up to 7% discount. Anyone within a 5 km radius can join."
              </p>
            </div>

            <div className="px-6 py-5 max-h-[400px] overflow-y-auto">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={notification.profileImage}
                          alt={notification.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>

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

      {/* Problem Description Modal */}
      {showProblemModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowProblemModal(false)}
          />

          <div className="relative z-10 w-full max-w-lg animate-in zoom-in-95 duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden">
              <div className="bg-white px-6 py-5 border-b border-gray-100">
                <h2 className="text-center text-xl font-semibold text-gray-900">Notification</h2>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  "This is a great offer for you. If more than one of you use the app together to place an order, you will get up to 7% discount. Anyone within a 5 km radius can join."
                </p>
              </div>

              <div className="px-6 py-5">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type Your problem
                  </label>
                  <textarea
                    value={problemText}
                    onChange={(e) => setProblemText(e.target.value)}
                    placeholder="I have some problem in my sink. Now i hair a plumber. if you want to need plumber then we are call a plumber in shear."
                    className="w-full min-h-[120px] px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={handleProblemSubmit}
                    className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Accept
                  </button>
                  <button
                    onClick={() => setShowProblemModal(false)}
                    className="flex items-center gap-1.5 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => handleFinalConfirm('cancel')}
          />

          <div className="relative z-10 w-full max-w-lg animate-in zoom-in-95 duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden">
              <div className="bg-white px-6 py-5 border-b border-gray-100">
                <h2 className="text-center text-xl font-semibold text-gray-900">Notification</h2>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  "This is a great offer for you. If more than one of you use the app together to place an order, you will get up to 7% discount. Anyone within a 5 km radius can join."
                </p>
              </div>

              <div className="px-6 py-8">
                {selectedNotification && (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src="/logo.png"
                          alt="jinia loris"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">
                          jinia loris
                        </h3>
                        <div className="flex items-start gap-1.5 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-600 leading-relaxed">
                            13th Street 47 W 13th St, New York, NY 10011, USA
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-red-600 text-sm">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          Unread
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => handleFinalConfirm('accept')}
                    className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Accept
                  </button>
                  <button
                    onClick={() => handleFinalConfirm('cancel')}
                    className="flex items-center gap-1.5 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}