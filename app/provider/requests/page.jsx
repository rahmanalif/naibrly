'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProviderRequestsPage() {
    const { isAuthenticated, userType } = useAuth();
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
                    <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
                    <p className="mt-2 text-gray-600">Manage your incoming service requests</p>
                </div>

                {/* Placeholder content */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="text-center py-12">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No requests yet</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            You don't have any service requests at the moment.
                        </p>
                        <p className="mt-4 text-sm text-teal-600 font-medium">
                            ✅ Provider Navbar is working correctly!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
