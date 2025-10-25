'use client';

import React, { useState } from 'react';
import { Edit2, ChevronRight } from 'lucide-react';
import EditProfileModal from '@/components/Global/Modals/EditProfile';

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Sample user data
  const userData = {
    name: 'Jane Doe',
    designation: 'Home owner',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    fullName: 'Jacob Mobile',
    userType: 'Home owner',
    address: '123 Oak Street Springfield, IL 62704',
    phone: '+1 012 345 6987',
    email: 'email@outlook.com',
    zipCode: 'Zip: 62704',
    joinedDate: 'Joined: Aug 5, 2023'
  };

  const menuItems = [
    { id: 'help', label: 'Help & Support', hasArrow: true },
    { id: 'privacy', label: 'Privacy Policy', hasArrow: true },
    { id: 'terms', label: 'Terms & Condition', hasArrow: true },
    { id: 'payment', label: 'Payment History', hasArrow: true },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-white px-6 py-6 flex items-center justify-between border-b">
            <h1 className="text-xl font-semibold text-gray-900">Your Profile</h1>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Edit Profile"
            >
              <Edit2 className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Image and Name */}
          <div className="flex flex-col items-center py-8 px-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 ring-4 ring-white shadow-lg">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Edit profile photo"
              >
                <Edit2 className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">{userData.name}</h2>
            <p className="text-sm text-gray-500">{userData.designation}</p>
          </div>

          {/* My Information Section */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">My Information</h3>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Edit
              </button>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.fullName}</span>
              </div>

              {/* User Type */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.userType}</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.phone}</span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.email}</span>
              </div>

              {/* Zip Code */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.zipCode}</span>
              </div>

              {/* Joined Date */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-700">{userData.joinedDate}</span>
              </div>
            </div>
          </div>

          {/* Notifications Toggle */}
          <div className="px-6 py-4 border-t border-b">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-900">Notifications</span>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors rounded-lg px-2"
              >
                <span className="text-base text-gray-900">{item.label}</span>
                {item.hasArrow && (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <div className="px-6 py-6">
            <button className="w-full text-left py-3 px-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
}