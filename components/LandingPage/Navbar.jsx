'use client';

import React from 'react';
import Image from 'next/image';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {

    return (
         
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
    );
}