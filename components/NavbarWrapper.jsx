'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/User/LandingPage/Navbar';
import ProviderNavbar from '@/components/Provider/ProviderNavbar';

/**
 * NavbarWrapper Component
 *
 * Automatically displays the correct navbar based on user type:
 * - Shows ProviderNavbar when userType is 'provider'
 * - Shows regular Navbar for users or when not authenticated
 *
 * Usage:
 * Import this component in your layout instead of the regular Navbar
 */
export default function NavbarWrapper() {
    const { userType, isAuthenticated } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Debug logging
        console.log('NavbarWrapper - isAuthenticated:', isAuthenticated);
        console.log('NavbarWrapper - userType:', userType);
    }, [isAuthenticated, userType]);

    // Prevent hydration mismatch by waiting for mount
    if (!mounted) {
        return <Navbar />; // Show default navbar during SSR
    }

    // Show provider navbar if user is logged in as provider
    if (isAuthenticated && userType === 'provider') {
        console.log('Rendering ProviderNavbar');
        return <ProviderNavbar />;
    }

    // Show user navbar by default (for users or non-authenticated)
    console.log('Rendering User Navbar');
    return <Navbar />;
}
