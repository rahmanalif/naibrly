'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogOut, User as UserIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function ProviderNavbar() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Get authentication state
    const { isAuthenticated, user, logout } = useAuth();

    // Close dropdowns when pathname changes
    useEffect(() => {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isUserMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Set mounted after component mounts to prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 bg-white border-b border-gray-200 z-[100] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <Link href="/" className='cursor-pointer'>
                    <div className="inline-flex items-center gap-1">
                        <Image
                            src="/logo.png"
                            alt="Naibrly Logo"
                            width={36}
                            height={36}
                            className="aspect-square bg-white bg-[url('/logo.png')] bg-lightgray bg-cover bg-center bg-no-repeat"
                        />
                        <span className="text-[#333] font-inter text-base sm:text-xl md:text-[24px] font-bold leading-[24px] uppercase" style={{ fontFeatureSettings: "'ss01' on, 'cv01' on" }}>
                            Naibrly
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-teal-600 hover:bg-teal-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-2 sm:gap-4 items-center">
                    {/* Home Button */}
                    <Link href="/">
                        <Button className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600">
                            Home
                        </Button>
                    </Link>

                    {/* Request Button */}
                    <Link href="/Request-Section">
                        <Button
                            variant="outline"
                            className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600"
                        >
                            Request
                        </Button>
                    </Link>

                    {/* User Profile Section */}
                    {mounted && isAuthenticated && (
                        <div className="relative user-menu-container">
                            <button
                                className="rounded-full border-2 border-teal-600 hover:border-teal-700 transition-colors p-0"
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            >
                                <Image
                                    src={user?.profileImage || "/logo.png"}
                                    alt="Provider Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full w-10 h-10 object-cover"
                                />
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[110]">
                                    <div className="py-2">
                                        <Link href="/Provider-Profile">
                                            <button
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="w-full text-left px-4 py-2 hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-600 flex items-center gap-2"
                                            >
                                                <UserIcon className="w-4 h-4" />
                                                My Profile
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setIsUserMenuOpen(false);
                                                logout();
                                            }}
                                            className="w-full text-left px-4 py-2 border-t hover:bg-red-50 text-sm text-gray-700 hover:text-red-600 flex items-center gap-2"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto shadow-lg">
                    <div className="px-4 py-4 space-y-3">
                        {/* Home Button */}
                        <Link href="/" passHref>
                            <Button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-sm px-4 rounded-md border border-teal-600"
                            >
                                Home
                            </Button>
                        </Link>

                        {/* Request Button */}
                        <Link href="/Request-Section" passHref>
                            <Button
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="outline"
                                className="w-full bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-sm px-4 rounded-md border border-teal-600"
                            >
                                Request
                            </Button>
                        </Link>

                        {/* User Profile Section */}
                        {isAuthenticated && (
                            <div className="border-t pt-3 space-y-2">
                                <Link href="/Provider-Profile" className="block">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full text-left px-4 py-2 hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-600 flex items-center gap-2 rounded-md"
                                    >
                                        <UserIcon className="w-4 h-4" />
                                        My Profile
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        logout();
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-gray-700 hover:text-red-600 flex items-center gap-2 rounded-md"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
