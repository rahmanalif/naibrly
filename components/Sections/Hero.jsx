'use client';

import React from 'react';
import Image from 'next/image';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
    const services = [
        { icon: '🧹', label: 'House cleaning' },
        { icon: '🔧', label: 'Handyman' },
        { icon: '⚡', label: 'Electrical and wiring repair' },
        { icon: '🎨', label: 'Painting' },
        { icon: '🗑️', label: 'Junk removal' },
        { icon: '🚚', label: 'Local moving (under 50 mi)' },
        { icon: '🛠️', label: 'Appl. repair or maintain' },
        { icon: '🪵', label: 'Floor installation' },
    ];

    const images = [
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1537432376769-c030db8f4542?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1584612691557-41b63ee3f00b?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center text-xl sm:text-2xl lg:text-3xl text-gray-900">
                        <Image src="/logo.png" alt="Naibrly Logo" width={28} height={28} className="mr-2" />
                        Naibrly
                    </div>
                    <nav className="flex gap-2 sm:gap-4">
                        <Button className="bg-teal-600 text-white text-xs sm:text-sm px-3 sm:px-4">Home</Button>
                        <Button variant="outline" className="border-teal-600 text-teal-600 flex items-center text-xs sm:text-sm px-3 sm:px-4">
                            <span className="hidden sm:inline">Service</span>
                            <span className="sm:hidden">Srv</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Button>
                        <Button variant="outline" className="border-teal-600 text-teal-600 flex items-center text-xs sm:text-sm px-3 sm:px-4">
                            <span className="hidden sm:inline">Sign in</span>
                            <span className="sm:hidden">Login</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
                {/* Headline */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-500 mb-2">
                        You. Your Neighbors. Saving time and money
                    </h1>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-500 mb-2">
                        on home services with <span className="text-teal-600 font-semibold">Naibrly</span>.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row mb-8 sm:mb-16 max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <input
                        type="text"
                        placeholder="Find service near by me"
                        className="flex-1 px-4 py-3 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-500"
                    />
                    <div className="border-t sm:border-t-0 sm:border-l border-gray-300 flex items-center px-4 py-2 sm:py-0 bg-gray-50">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        <span className="ml-2 text-sm sm:text-base text-gray-600">Zip code</span>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 rounded-none px-6 sm:px-8 py-3 h-auto text-sm sm:text-base">
                        Search
                    </Button>
                </div>

                {/* Image Grid */}
                <div className="mb-8 hidden lg:flex gap-4 justify-center max-w-6xl mx-auto items-start">
                    {/* 1st image from Group 1 */}
                    <div className="flex flex-col gap-4">
                        <div className=" bg-gray-300 rounded-3xl w-[300px] h-[294px] flex items-center justify-center overflow-hidden">
                            <span className="text-gray-500">300 × 294</span>
                        </div>
                        {/* 2nd and 3rd images together below */}
                        <div className="flex gap-4">
                        {/* 3rd image: 200 × 100 */}
                            <div className="bg-gray-300 rounded-2xl w-[200px] h-[100px] flex items-center justify-center overflow-hidden">
                                <span className="text-gray-500 text-sm">200 × 100</span>
                            </div>
                            {/* 2nd image: 150 × 150 */}
                            <div className="bg-gray-300 rounded-2xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                                <span className="text-gray-500 text-sm">150 × 150</span>
                            </div>

                        </div>
                    </div>

                    {/* Group 2 */}
                    <div className="flex flex-col gap-4">
                        {/* 4th and 5th images side by side */}
                        <div className="flex gap-4">
                            {/* 5th image: 150 × 150 */}
                            <div className="bg-gray-300 rounded-2xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                                <span className="text-gray-500 text-sm">150 × 150</span>
                            </div>
                            {/* 4th image: 200 × 100 */}
                            <div className="bg-gray-300 rounded-2xl w-[200px] h-[100px] flex items-center justify-center overflow-hidden">
                                <span className="text-gray-500 text-sm">200 × 100</span>
                            </div>
                        </div>
                        {/* 6th image: 300 × 294 */}
                        <div className="bg-gray-300 rounded-3xl w-[300px] h-[294px] flex items-center justify-center overflow-hidden">
                            <span className="text-gray-500">300 × 294</span>
                        </div>
                    </div>
                </div>

                {/* Simplified Mobile Image Grid */}
                <div className="mb-8 grid grid-cols-2 gap-3 lg:hidden max-w-md mx-auto">
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-xs">Image 1</span>
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-xs">Image 2</span>
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-xs">Image 3</span>
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-xs">Image 4</span>
                    </div>
                </div>

                {/* Services Section */}
                <div className="border-t border-gray-200 pt-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Popular services in Naibrly</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {services.map((service, idx) => (
                            <button
                                key={idx}
                                className="p-4 sm:p-6 border border-gray-300 rounded-lg hover:border-teal-600 hover:shadow-md transition-all text-center"
                            >
                                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{service.icon}</div>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium">{service.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}