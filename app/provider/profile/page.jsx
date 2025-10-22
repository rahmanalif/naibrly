'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProviderProfilePage() {
    const { isAuthenticated, userType, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Redirect if not authenticated or not a provider
        if (!isAuthenticated || userType !== 'provider') {
            router.push('/Login?type=provider');
        }
    }, [isAuthenticated, userType, router]);

    if (!isAuthenticated || userType !== 'provider') {
        return <div className="min-h-screen flex items-center justify-center">
            <p>Redirecting...</p>
        </div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Provider Profile</h1>
                    <p className="mt-2 text-gray-600">Manage your business profile and information</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    src={user?.profileImage || "/logo.png"}
                                    alt="Provider"
                                    className="h-20 w-20 rounded-full border-2 border-teal-600"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{user?.name || 'Provider Name'}</h2>
                                <p className="text-gray-600">{user?.email}</p>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 mt-2">
                                    Provider Account
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">User ID</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{user?.id}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Account Type</dt>
                                    <dd className="mt-1 text-sm text-gray-900 capitalize">{userType}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{user?.email}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                    <dd className="mt-1 text-sm text-green-600 font-medium">Active</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                            <p className="text-sm text-teal-600 font-medium">
                                ✅ Provider Profile Page - Working correctly!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
