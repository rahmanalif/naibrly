'use client';

import React from 'react';
import Image from 'next/image';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function HeroSection() {
    return (
         
                <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div class="flex items-center text-xl sm:text-2xl lg:text-3xl text-gray-900">
                        <Image src="/logo.png" alt="Naibrly Logo" width={28} height={28} class="mr-2" />
                        Naibrly
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button 
                                    variant="outline"
                                    class="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-xs sm:text-sm px-3 sm:px-4"
                                >
                                    Home
                                </Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <span class="hidden sm:inline">Naibly bundle Offer</span>
                                    <span class="sm:hidden">Naibly bundle Offer</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li class="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div class="mb-2 mt-4 text-lg font-medium">
                                                        Naibrly
                                                    </div>
                                                    <p class="text-sm leading-tight text-muted-foreground">
                                                        Your one-stop shop for all your needs.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Offer 1</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for offer 1.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Offer 2</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for offer 2.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <span class="hidden sm:inline">service</span>
                                    <span class="sm:hidden">service</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Service 1</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for service 1.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Service 2</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for service 2.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <span class="hidden sm:inline">Order</span>
                                    <span class="sm:hidden">Order</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Order 1</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for order 1.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div class="text-sm font-medium leading-none">Order 2</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Description for order 2.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button 
                                    variant="outline"
                                    class="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white flex items-center text-xs sm:text-sm px-3 sm:px-4"
                                >
                                    <span class="hidden sm:inline">Notification</span>
                                    <span class="sm:hidden">Notification</span>
                                    <ChevronRight class="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                                </Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button 
                                    variant="outline"
                                    class="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white flex items-center text-xs sm:text-sm px-3 sm:px-4"
                                >
                                    <span class="hidden sm:inline">Sign in</span>
                                    <span class="sm:hidden">Login</span>
                                    <ChevronRight class="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>           
    );
}