'use client';

import React from 'react';
import Image from 'next/image';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
    const HouseCleaningIcon = () => (
        <svg width="52" height="74" viewBox="0 0 52 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.40234 14.6021V65.7973C8.40234 69.3298 11.2693 72.1968 14.8017 72.1968H43.5991C47.1316 72.1968 49.9986 69.3298 49.9986 65.7973V59.0747C49.9986 51.4883 45.5316 44.6121 38.5979 41.5308L21.2012 33.8004V14.6021" stroke="#0E7A60" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.7969 14.6021V24.2012L40.396 27.4008" stroke="#0E7A60" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.3994 1.80371H33.997V14.6025H2L8.3994 1.80371Z" stroke="#0E7A60" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const RenchToolIcon = () => (
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.8048 3.46398C27.5309 0.0165584 33.8074 -0.377442 38.9274 2.04144C39.5161 2.31954 39.9324 2.86675 40.0437 3.50824C40.1549 4.14971 39.947 4.80519 39.4862 5.26518L32.7642 11.9767L33.6936 14.7602L36.4876 15.6905L43.232 8.95659C43.6912 8.49807 44.3443 8.29087 44.9839 8.40084C45.6235 8.51081 46.1699 8.92425 46.4497 9.50983C49.2661 15.406 48.2515 22.681 43.3543 27.5715C39.4911 31.4304 34.1395 32.8693 29.161 31.9299L15.1866 45.8839C11.5808 49.4846 5.66266 49.3682 2.20646 45.5362C-1.11894 41.8487 -0.497579 36.2684 2.81237 32.9631C2.81233 32.9633 2.81238 32.9631 2.81237 32.9631L16.5052 19.2888C15.4225 13.5507 17.512 7.32501 22.8048 3.46398ZM34.3661 4.72476C31.1943 4.10752 27.8192 4.75745 25.1618 6.6957C20.9188 9.79099 19.423 14.8768 20.6319 19.4086C20.8158 20.0987 20.618 20.8346 20.1126 21.3393L5.63878 35.7936C3.62887 37.8005 3.46626 40.9604 5.17677 42.857C7.09248 44.981 10.3662 45.0446 12.3603 43.0534L27.1141 28.321C27.6186 27.8173 28.3531 27.6201 29.0419 27.8037C33.0199 28.863 37.4219 27.8436 40.5276 24.7411C43.431 21.8419 44.5137 17.814 43.7773 14.0646L38.4402 19.3934C37.9048 19.928 37.1134 20.1148 36.3954 19.8757L31.4815 18.2396C30.8842 18.0408 30.4156 17.5725 30.2163 16.9754L28.5781 12.0694C28.338 11.3499 28.5254 10.5565 29.0622 10.0206L34.3661 4.72476Z" fill="#0E7A60" />
        </svg>
    );
    const ElectricalChargerIcon = () => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 2C16 0.89544 14.8061 0 13.3333 0C11.8605 0 10.6667 0.89544 10.6667 2V12H2.66667C1.19392 12 0 12.8954 0 14V24C0 33.2645 9.33404 40.8952 21.3333 41.8901V45.9999C21.3333 47.1045 22.5273 48 23.9998 48C25.4726 48 26.6666 47.1045 26.6666 45.9999V41.8901C38.666 40.8952 48 33.2645 48 24V14C48 12.8954 46.806 12 45.3332 12H37.3332V2C37.3332 0.89544 36.1395 0 34.6667 0C33.1939 0 31.9999 0.89544 31.9999 2V12H16V2ZM23.9998 38C13.6914 38 5.33334 31.7315 5.33334 24V16H42.6665V24C42.6665 31.7315 34.3085 38 23.9998 38Z" fill="#0E7A60" />
        </svg>
    );
    const PaintingIcon = () => (<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 5.81411C8.82812 4.9147 9.55726 4.18555 10.4567 4.18555H37.5424C38.4418 4.18555 39.171 4.91467 39.171 5.81411V24.3284C39.171 24.3863 39.168 24.4434 39.1621 24.4998C39.168 24.5562 39.171 24.6134 39.171 24.6713V29.6427C39.171 32.3409 36.9835 34.5284 34.2853 34.5284H29.5962V39.6635C29.5962 40.3176 29.4748 41.073 29.07 41.7756C28.1025 43.4552 26.4795 44.8142 23.9995 44.8142C21.555 44.8142 19.8153 43.4922 18.8001 41.7926C18.3753 41.0814 18.2568 40.3128 18.2568 39.6635V34.5284H13.7139C11.0155 34.5284 8.82812 32.3409 8.82812 29.6427V24.6713C8.82812 24.6134 8.83115 24.5562 8.83705 24.4998C8.83115 24.4434 8.82812 24.3863 8.82812 24.3284V5.81411ZM11.7424 25.9569V29.6427C11.7424 30.7314 12.6251 31.6142 13.7139 31.6142H19.5424C20.4207 31.6142 21.171 32.3204 21.171 33.2408V39.6635C21.171 39.98 21.2314 40.1801 21.3019 40.2981C21.891 41.2842 22.7614 41.8998 23.9995 41.8998C25.1997 41.8998 25.9669 41.3241 26.5449 40.3209C26.6221 40.1868 26.682 39.9753 26.682 39.6635V33.2408C26.682 32.3204 27.4323 31.6142 28.3105 31.6142H34.2853C35.374 31.6142 36.2568 30.7314 36.2568 29.6427V25.9569H11.7424ZM11.7424 23.0427H36.2568V7.09984H11.7424V23.0427Z" fill="#0E7A60" />
    </svg>
    );
    const JunkRemovalIcon = () => (<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 5.81411C8.82812 4.9147 9.55726 4.18555 10.4567 4.18555H37.5424C38.4418 4.18555 39.171 4.91467 39.171 5.81411V24.3284C39.171 24.3863 39.168 24.4434 39.1621 24.4998C39.168 24.5562 39.171 24.6134 39.171 24.6713V29.6427C39.171 32.3409 36.9835 34.5284 34.2853 34.5284H29.5962V39.6635C29.5962 40.3176 29.4748 41.073 29.07 41.7756C28.1025 43.4552 26.4795 44.8142 23.9995 44.8142C21.555 44.8142 19.8153 43.4922 18.8001 41.7926C18.3753 41.0814 18.2568 40.3128 18.2568 39.6635V34.5284H13.7139C11.0155 34.5284 8.82812 32.3409 8.82812 29.6427V24.6713C8.82812 24.6134 8.83115 24.5562 8.83705 24.4998C8.83115 24.4434 8.82812 24.3863 8.82812 24.3284V5.81411ZM11.7424 25.9569V29.6427C11.7424 30.7314 12.6251 31.6142 13.7139 31.6142H19.5424C20.4207 31.6142 21.171 32.3204 21.171 33.2408V39.6635C21.171 39.98 21.2314 40.1801 21.3019 40.2981C21.891 41.2842 22.7614 41.8998 23.9995 41.8998C25.1997 41.8998 25.9669 41.3241 26.5449 40.3209C26.6221 40.1868 26.682 39.9753 26.682 39.6635V33.2408C26.682 32.3204 27.4323 31.6142 28.3105 31.6142H34.2853C35.374 31.6142 36.2568 30.7314 36.2568 29.6427V25.9569H11.7424ZM11.7424 23.0427H36.2568V7.09984H11.7424V23.0427Z" fill="#0E7A60" />
    </svg>
    );
    const LocalMovingIcon = () => (<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 5.81411C8.82812 4.9147 9.55726 4.18555 10.4567 4.18555H37.5424C38.4418 4.18555 39.171 4.91467 39.171 5.81411V24.3284C39.171 24.3863 39.168 24.4434 39.1621 24.4998C39.168 24.5562 39.171 24.6134 39.171 24.6713V29.6427C39.171 32.3409 36.9835 34.5284 34.2853 34.5284H29.5962V39.6635C29.5962 40.3176 29.4748 41.073 29.07 41.7756C28.1025 43.4552 26.4795 44.8142 23.9995 44.8142C21.555 44.8142 19.8153 43.4922 18.8001 41.7926C18.3753 41.0814 18.2568 40.3128 18.2568 39.6635V34.5284H13.7139C11.0155 34.5284 8.82812 32.3409 8.82812 29.6427V24.6713C8.82812 24.6134 8.83115 24.5562 8.83705 24.4998C8.83115 24.4434 8.82812 24.3863 8.82812 24.3284V5.81411ZM11.7424 25.9569V29.6427C11.7424 30.7314 12.6251 31.6142 13.7139 31.6142H19.5424C20.4207 31.6142 21.171 32.3204 21.171 33.2408V39.6635C21.171 39.98 21.2314 40.1801 21.3019 40.2981C21.891 41.2842 22.7614 41.8998 23.9995 41.8998C25.1997 41.8998 25.9669 41.3241 26.5449 40.3209C26.6221 40.1868 26.682 39.9753 26.682 39.6635V33.2408C26.682 32.3204 27.4323 31.6142 28.3105 31.6142H34.2853C35.374 31.6142 36.2568 30.7314 36.2568 29.6427V25.9569H11.7424ZM11.7424 23.0427H36.2568V7.09984H11.7424V23.0427Z" fill="#0E7A60" />
    </svg>
    );
    const ApplianceRepairIcon = () => (<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.7903 24.9332C32.4605 24.2629 33.5439 24.2629 34.2143 24.9332L39.6519 30.3727C40.8896 31.6103 41.5703 33.2561 41.5703 35.0132C41.5703 36.7703 40.8896 38.4178 39.6519 39.6538C38.4176 40.8898 36.7703 41.5703 35.0114 41.5703C33.2543 41.5703 31.6068 40.8898 30.3708 39.6538L23.2136 32.4967C22.545 31.8263 22.545 30.7429 23.2136 30.0727C23.8839 29.4023 24.969 29.4023 25.6394 30.0727L32.7948 37.2298C33.9708 38.4058 36.0519 38.4058 37.2279 37.2298C37.8176 36.6418 38.1416 35.8549 38.1416 35.0132C38.1416 34.1732 37.8176 33.3863 37.2279 32.7967L31.7903 27.3572C31.1199 26.6869 31.1199 25.6034 31.7903 24.9332ZM22.548 3.69202C26.3502 -0.111976 32.0126 -0.219977 35.4102 1.6023C35.8868 1.86117 36.216 2.32744 36.2948 2.86402C36.3737 3.39888 36.1937 3.94231 35.8097 4.32459L31.4675 8.66688L31.8395 10.1583L33.324 10.5269L37.6491 6.15888C38.0417 5.76288 38.6022 5.58802 39.1491 5.67202C39.6977 5.76288 40.1675 6.11602 40.4108 6.61659C42.5348 11.0103 41.7086 16.0469 38.3057 19.448C35.0417 22.7171 30.6446 23.2091 27.3222 22.2406L10.2103 39.3542L10.2068 39.3577L9.55199 40.0075C8.5457 41.0155 7.20341 41.5709 5.7737 41.5709C4.3457 41.5709 3.00341 41.0155 1.99199 40.004C0.982279 38.9942 0.426843 37.652 0.426843 36.224C0.426843 34.7942 0.982279 33.4502 1.99199 32.4422L2.63828 31.7909L19.7382 14.6891C19.0731 12.3389 18.5195 7.72059 22.548 3.69202ZM30.504 3.85317C28.6217 3.85317 26.568 4.52002 24.972 6.11602C21.7302 9.35944 22.7195 13.0709 23.2955 14.5177C23.5475 15.1537 23.3982 15.8789 22.9131 16.364L4.42113 34.8629C4.05428 35.2297 3.85541 35.7097 3.85541 36.224C3.85541 36.7349 4.05428 37.2166 4.41599 37.58C5.16684 38.3275 6.3857 38.3257 7.13141 37.58L25.6611 19.0555C26.1566 18.5617 26.8988 18.4142 27.5417 18.6886C29.2835 19.424 33.0017 19.904 35.88 17.024C37.6148 15.2926 38.3777 12.9422 38.0742 10.6023L35.0742 13.6331C34.6475 14.0651 34.0268 14.24 33.4388 14.0909L30.0102 13.2337C29.3966 13.0811 28.9166 12.5995 28.764 11.9857L27.9068 8.55717C27.7611 7.97259 27.9308 7.35544 28.3577 6.93031L31.3835 3.90288C31.0971 3.8703 30.8022 3.85317 30.504 3.85317ZM4.35701 0.929623C4.91415 0.375913 5.77815 0.267913 6.45188 0.672478L15.0233 5.81533C15.5393 6.12391 15.8547 6.68277 15.8547 7.28448V14.1416C15.8547 15.0896 15.0867 15.8558 14.1405 15.8558H7.2833C6.68159 15.8558 6.12273 15.5405 5.81415 15.0245L0.671299 6.45304C0.265009 5.77762 0.371298 4.91362 0.928443 4.35819L4.35701 0.929623ZM5.83473 4.29991L4.29873 5.83591L8.2553 12.4273H12.4262V8.25648L5.83473 4.29991Z" fill="#0E7A60" />
    </svg>
    );
    const FloorInstallationIcon = () => (<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.7903 24.9332C32.4605 24.2629 33.5439 24.2629 34.2143 24.9332L39.6519 30.3727C40.8896 31.6103 41.5703 33.2561 41.5703 35.0132C41.5703 36.7703 40.8896 38.4178 39.6519 39.6538C38.4176 40.8898 36.7703 41.5703 35.0114 41.5703C33.2543 41.5703 31.6068 40.8898 30.3708 39.6538L23.2136 32.4967C22.545 31.8263 22.545 30.7429 23.2136 30.0727C23.8839 29.4023 24.969 29.4023 25.6394 30.0727L32.7948 37.2298C33.9708 38.4058 36.0519 38.4058 37.2279 37.2298C37.8176 36.6418 38.1416 35.8549 38.1416 35.0132C38.1416 34.1732 37.8176 33.3863 37.2279 32.7967L31.7903 27.3572C31.1199 26.6869 31.1199 25.6034 31.7903 24.9332ZM22.548 3.69202C26.3502 -0.111976 32.0126 -0.219977 35.4102 1.6023C35.8868 1.86117 36.216 2.32744 36.2948 2.86402C36.3737 3.39888 36.1937 3.94231 35.8097 4.32459L31.4675 8.66688L31.8395 10.1583L33.324 10.5269L37.6491 6.15888C38.0417 5.76288 38.6022 5.58802 39.1491 5.67202C39.6977 5.76288 40.1675 6.11602 40.4108 6.61659C42.5348 11.0103 41.7086 16.0469 38.3057 19.448C35.0417 22.7171 30.6446 23.2091 27.3222 22.2406L10.2103 39.3542L10.2068 39.3577L9.55199 40.0075C8.5457 41.0155 7.20341 41.5709 5.7737 41.5709C4.3457 41.5709 3.00341 41.0155 1.99199 40.004C0.982279 38.9942 0.426843 37.652 0.426843 36.224C0.426843 34.7942 0.982279 33.4502 1.99199 32.4422L2.63828 31.7909L19.7382 14.6891C19.0731 12.3389 18.5195 7.72059 22.548 3.69202ZM30.504 3.85317C28.6217 3.85317 26.568 4.52002 24.972 6.11602C21.7302 9.35944 22.7195 13.0709 23.2955 14.5177C23.5475 15.1537 23.3982 15.8789 22.9131 16.364L4.42113 34.8629C4.05428 35.2297 3.85541 35.7097 3.85541 36.224C3.85541 36.7349 4.05428 37.2166 4.41599 37.58C5.16684 38.3275 6.3857 38.3257 7.13141 37.58L25.6611 19.0555C26.1566 18.5617 26.8988 18.4142 27.5417 18.6886C29.2835 19.424 33.0017 19.904 35.88 17.024C37.6148 15.2926 38.3777 12.9422 38.0742 10.6023L35.0742 13.6331C34.6475 14.0651 34.0268 14.24 33.4388 14.0909L30.0102 13.2337C29.3966 13.0811 28.9166 12.5995 28.764 11.9857L27.9068 8.55717C27.7611 7.97259 27.9308 7.35544 28.3577 6.93031L31.3835 3.90288C31.0971 3.8703 30.8022 3.85317 30.504 3.85317ZM4.35701 0.929623C4.91415 0.375913 5.77815 0.267913 6.45188 0.672478L15.0233 5.81533C15.5393 6.12391 15.8547 6.68277 15.8547 7.28448V14.1416C15.8547 15.0896 15.0867 15.8558 14.1405 15.8558H7.2833C6.68159 15.8558 6.12273 15.5405 5.81415 15.0245L0.671299 6.45304C0.265009 5.77762 0.371298 4.91362 0.928443 4.35819L4.35701 0.929623ZM5.83473 4.29991L4.29873 5.83591L8.2553 12.4273H12.4262V8.25648L5.83473 4.29991Z" fill="#0E7A60" />
    </svg>
    );



    const services = [
        { icon: <HouseCleaningIcon />, label: 'House cleaning' },
        { icon: <RenchToolIcon />, label: 'Handyman' },
        { icon: <ElectricalChargerIcon />, label: 'Electrical and wiring repair' },
        { icon: <PaintingIcon/>, label: 'Painting' },
        { icon: <JunkRemovalIcon/>, label: 'Junk removal' },
        { icon: <LocalMovingIcon/>, label: 'Local moving (under 50 mi)' },
        { icon: <ApplianceRepairIcon/>, label: 'Appl. repair or maintain' },
        { icon: <FloorInstallationIcon/>, label: 'Floor installation' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
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
                        <div className=" bg-gray-300 rounded-3xl w-[300px] h-[294px] flex items-center justify-center overflow-hidden ml-15">
                            <Image src="/ImageGrid/image (1).png" alt="Service Image 1" width={300} height={294} className="object-cover w-full h-full" />
                        </div>
                        {/* 2nd and 3rd images together below */}
                        <div className="flex gap-4">
                            {/* 3rd image: 200 × 100 */}
                            <div className="bg-gray-300 rounded-2xl w-[200px] h-[100px] flex items-center justify-center overflow-hidden">
                                <Image src="/ImageGrid/image (3).png" alt="Service Image 3" width={200} height={100} className="object-cover w-full h-full" />
                            </div>
                            {/* 2nd image: 150 × 150 */}
                            <div className="bg-gray-300 rounded-2xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                                <Image src="/ImageGrid/image (2).png" alt="Service Image 2" width={150} height={150} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Group 2 */}
                    <div className="flex flex-col gap-4 mt-18">
                        {/* 4th and 5th images side by side */}
                        <div className="flex gap-4">
                            {/* 5th image: 150 × 150 */}
                            <div className="bg-gray-300 rounded-2xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                                <Image src="/ImageGrid/image (5).png" alt="Service Image 5" width={150} height={150} className="object-cover w-full h-full" />
                            </div>
                            {/* 4th image: 200 × 100 */}
                            <div className="bg-gray-300 rounded-2xl w-[200px] h-[100px] flex items-center justify-center overflow-hidden mt-12">
                                <Image src="/ImageGrid/image (4).png" alt="Service Image 4" width={200} height={100} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        {/* 6th image: 300 × 294 */}
                        <div className="bg-gray-300 rounded-3xl w-[300px] h-[294px] flex items-center justify-center overflow-hidden">
                            <Image src="/ImageGrid/image (6).png" alt="Service Image 6" width={300} height={294} className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Simplified Mobile Image Grid */}
                <div className="mb-8 grid grid-cols-2 gap-3 lg:hidden max-w-md mx-auto">
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image src="/ImageGrid/image (1).png" alt="Service Image 1" layout="fill" className="object-cover" />
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image src="/ImageGrid/image (2).png" alt="Service Image 2" layout="fill" className="object-cover" />
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image src="/ImageGrid/image (3).png" alt="Service Image 3" layout="fill" className="object-cover" />
                    </div>
                    <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image src="/ImageGrid/image (4).png" alt="Service Image 4" layout="fill" className="object-cover" />
                    </div>
                </div>

                {/* Services Section */}
                <div className="border-t border-gray-200 pt-4">
                    <h2 className="text-w-[150]  sm:text-3xl font-semibold text-teal-600 mb-6 sm:mb-8">Popular services in Naibrly</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {services.map((service, idx) => (
                            <button
                                key={idx}
                                className="p-4 sm:p-6 border border-gray-300 rounded-lg hover:border-teal-600 hover:shadow-md transition-all text-center"
                            >
                                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 flex justify-center items-center">{service.icon}</div>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium">{service.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}