'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SignInModal from '@/components/User/Modals/WithoutSignUpModal';
import Link from 'next/link';

const SubMenuItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="px-4 py-2 hover:bg-teal-50 rounded-md text-sm text-gray-700 hover:text-teal-600 cursor-pointer flex justify-between items-center">
                <span>{item.name}</span>
                {item.subServices && item.subServices.length > 0 && (
                    <ChevronRight className="w-4 h-4" />
                )}
            </div>
            {isHovered && item.subServices && item.subServices.length > 0 && (
                <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="p-2">
                        {item.subServices.map((subItem, idx) => (
                            <SubMenuItem key={idx} item={subItem} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/' || pathname === '/login' || pathname === '/signup';

    const services = [
        {
            name: 'Home Repairs & Maintenance',
            subServices: [
                { name: 'Plumbing', subServices: [] },
                { name: 'Locksmiths', subServices: [] },
                { name: 'Appliance Repairs', subServices: [] },
                { name: 'Door & window Repairs', subServices: [] },
                { name: 'HVAC', subServices: [] },
                { name: 'Electrical', subServices: [] }
            ]
        },
        { name: 'Cleaning & Organization', subServices: [] },
        { name: 'Renovations & Upgrades', subServices: [] },
        {
            name: 'Exterior',
            subServices: [
                { name: 'Exterior Home Care', subServices: [] },
                { name: 'Landscaping & Outdoor Services', subServices: [] }
            ]
        },
        {
            name: 'More Services',
            subServices: [
                { name: 'Moving', subServices: [] },
                { name: 'Installation & Assembly', subServices: [] }
            ]
        },
        { name: 'House Painter', subServices: [] },
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const ModalComponent = () => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }}
        >
            <SignInModal />
        </div>
    );

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-1">
                    <Image 
                        src="/logo.png" 
                        alt="Naibrly Logo" 
                        width={36} 
                        height={36} 
                        className="aspect-square bg-[url('/logo.png')] bg-lightgray bg-cover bg-center bg-no-repeat" 
                    />
                    <span className="text-[#333] font-inter text-[24px] font-bold leading-[24px] uppercase" style={{ fontFeatureSettings: "'ss01' on, 'cv01' on" }}>
                        Naibrly
                    </span>
                </div>

                <nav className="flex gap-2 sm:gap-4 items-center">
                    <Button
                        onClick={isHomePage ? openModal : undefined}
                        className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600"
                    >
                        Home
                    </Button>

                    {/* <Button
                        onClick={isHomePage ? openModal : undefined}
                        className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600"
                    >
                        Naibly bundle Offer
                    </Button> */}

                    <div className="relative">
                        <Button
                            variant="outline"
                            className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600"
                            onClick={() => {
                                if (isHomePage) {
                                    openModal();
                                } else {
                                    setIsServiceOpen(!isServiceOpen);
                                }
                            }}
                            onMouseEnter={() => !isHomePage && setIsServiceOpen(true)}
                        >
                            <span className="hidden sm:inline">Service</span>
                            <span className="sm:hidden">Service</span>
                            <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                        </Button>

                        {isServiceOpen && !isHomePage && (
                            <div
                                className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                onMouseLeave={() => setIsServiceOpen(false)}
                            >
                                <div className="p-2">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="relative"
                                            onMouseEnter={() => setHoveredService(index)}
                                            onMouseLeave={() => setHoveredService(null)}
                                        >
                                            <button className="w-full text-left px-4 py-2 hover:bg-teal-50 rounded-md text-sm text-gray-700 hover:text-[#00CD49] transition-colors flex justify-between items-center">
                                                <span>{service.name}</span>
                                                {service.subServices.length > 0 && (
                                                    <ChevronRight className="w-4 h-4" />
                                                )}
                                            </button>
                                            {hoveredService === index && service.subServices.length > 0 && (
                                                <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                                                    <div className="p-2">
                                                        {service.subServices.map((sub, idx) => (
                                                            <SubMenuItem key={idx} item={sub} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {!isHomePage && (
                        <Button
                            variant="outline"
                            className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white text-xs sm:text-sm px-3 sm:px-4 rounded-md border border-teal-600"
                        >
                            Order
                        </Button>
                    )}

                    {!isHomePage && (
                        <Button
                            variant="outline"
                            className="border-teal-600 text-teal-600 hover:bg-teal-50 text-xs sm:text-sm px-3 sm:px-4 rounded-md hidden md:flex items-center"
                        >
                            <Bell className="w-4 h-4" />
                        </Button>
                    )}

                    {isHomePage ? (
                        <div className="relative">
                            <Button
                                variant="outline"
                                className="border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center text-xs sm:text-sm px-3 sm:px-4 rounded-md"
                                onClick={() => setIsServiceOpen(!isServiceOpen)}
                            >
                                <span className="hidden sm:inline">Sign in</span>
                                <span className="sm:hidden">Login</span>
                                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                            </Button>
                            {isServiceOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="py-2">
                                        <Link href="/Login">
                                        <button
                                            onClick={() => {
                                                setIsServiceOpen(false);
                                                openModal();
                                            }}
                                            className="w-full text-left px-4 py-2 border-b hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-600"
                                        >
                                            User
                                        </button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setIsServiceOpen(false);
                                                openModal();
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-600"
                                        >
                                            Provider
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
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
            {isModalOpen && <ModalComponent />}
        </div>
    );
}