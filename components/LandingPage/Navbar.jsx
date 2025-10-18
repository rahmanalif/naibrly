'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const pathname = usePathname();

    // Check if we're on the home page, login, or signup page
    const isHomePage = pathname === '/' || pathname === '/login' || pathname === '/signup';

    const services = [
        { name: 'Interior', subServices: ['Home Remod & Maintenance', 'Cleaning & Organization', 'Renovations & Upgrades', 'Exterior', 'Exterior Home Care', 'Landscaping & Outdoor Services', 'Main Services', 'Moving', 'Installation & Assembly', 'House Painter'] },
        { name: 'Plumbing', subServices: [] },
        { name: 'Locksmith', subServices: [] },
        { name: 'Appliance Repairs', subServices: [] },
        { name: 'Door & Window Repairs', subServices: [] },
        { name: 'HVAC', subServices: [] },
        { name: 'Electrical', subServices: [] },
    ];

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center text-xl sm:text-2xl lg:text-3xl text-gray-900 font-semibold">
                    <Image src="/logo.png" alt="Naibrly Logo" width={28} height={28} className="mr-2" />
                    Naibrly
                </div>

                {/* Navigation */}
                <nav className="flex gap-2 sm:gap-4 items-center">
                    {/* Home Button */}
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md">
                        Home
                    </Button>

                    {/* Service Dropdown */}
                    <div className="relative">
                        <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center text-xs sm:text-sm px-3 sm:px-4 rounded-md"
                            onClick={() => setIsServiceOpen(!isServiceOpen)}
                            onMouseEnter={() => !isHomePage && setIsServiceOpen(true)}
                        >
                            <span className="hidden sm:inline">Naibrly bundle Offer</span>
                            <span className="sm:hidden">Service</span>
                            <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                        </Button>

                        {/* Dropdown Menu - Only show when not on home page */}
                        {isServiceOpen && !isHomePage && (
                            <div
                                className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                onMouseLeave={() => setIsServiceOpen(false)}
                            >
                                <div className="p-2">
                                    {services.map((service, index) => (
                                        <div key={index}>
                                            <button className="w-full text-left px-4 py-2 hover:bg-teal-50 rounded-md text-sm text-gray-700 hover:text-teal-600 transition-colors">
                                                {service.name}
                                                {service.subServices.length > 0 && (
                                                    <ChevronRight className="w-4 h-4 inline float-right" />
                                                )}
                                            </button>
                                            {service.subServices.length > 0 && (
                                                <div className="pl-4 text-xs text-gray-500">
                                                    {service.subServices.map((sub, idx) => (
                                                        <div key={idx} className="py-1 hover:text-teal-600 cursor-pointer">
                                                            {sub}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Button - Only show when not on home page */}
                    {!isHomePage && (
                        <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 text-xs sm:text-sm px-3 sm:px-4 rounded-md hidden md:flex"
                        >
                            Order
                        </Button>
                    )}

                    {/* Notification Button - Only show when not on home page */}
                    {!isHomePage && (
                        <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 text-xs sm:text-sm px-3 sm:px-4 rounded-md hidden md:flex items-center"
                        >
                            <Bell className="w-4 h-4" />
                        </Button>
                    )}

                    {/* Sign in / Profile */}
                    {isHomePage ? (
                        <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center text-xs sm:text-sm px-3 sm:px-4 rounded-md"
                        >
                            <span className="hidden sm:inline">Sign in</span>
                            <span className="sm:hidden">Login</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="User Profile"
                                width={32}
                                height={32}
                                className="rounded-full w-8 h-8 object-cover"
                            />
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}