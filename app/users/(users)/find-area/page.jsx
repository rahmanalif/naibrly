"use client"
import { Images } from '@/public/usersImg/ExportImg'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { bundlesData } from '../constans';
import NaibrlyLanding from '@/components/User/LandingPage/Mobileapp';


// this is for opening modal 
const BundleCard = ({ setOpen, modaData }) => {
    return (
        <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center z-50">
            <div className="bg-white flex rounded-[12px] max-w-[680px] relative">
                {/* ide */}
                <div className='flex-1'>
                    <Image src={Images.modal_img} alt='user' width={297} className='rounded-bl-[12px] rounded-tl-[12px] h-full' />
                </div>
                <div className='modal   '>
                    <div>
                        <h1 className="text-[18px] text-[#000] font-medium">Window Washing</h1>
                        <p className="text-[16px] text-[#333] font-medium">3-Person Bundle (2 Joined, 1 Spot Open)</p>
                    </div>

                    {/* Location & Users */}
                    <div className="mt-3 flex flex-col items-center gap-4 border-b pb-4">
                        <div className="flex items-center gap-2">
                            <div>
                                <Image className='rounded-[6px] w-10 h-10' src={Images.left1} quality={75}
                                    priority alt='' />
                            </div>
                            <div className='flex flex-col gap-[6px]'>
                                <span className="text-sm font-semibold">
                                    Moniru
                                </span>
                                <div className="flex  items-center gap-2 text-sm font-semibold text-[#181818]">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.9989 13.4295C13.722 13.4295 15.1189 12.0326 15.1189 10.3095C15.1189 8.58633 13.722 7.18945 11.9989 7.18945C10.2758 7.18945 8.87891 8.58633 8.87891 10.3095C8.87891 12.0326 10.2758 13.4295 11.9989 13.4295Z" stroke="#0E7A60" strokeWidth="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#0E7A60" strokeWidth="1.5" />
                                        </svg>
                                    </span>
                                    <span className="text-xs text-gray-500">Street Springfield, IL 62704</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <Image className='rounded-[6px] w-10 h-10' src={Images.left1} alt=''
                                    quality={75}
                                    priority />
                            </div>
                            <div className='flex flex-col gap-[6px]'>
                                <span className="text-sm font-semibold">Shuvos</span>
                                <div className="flex  items-center gap-2 text-sm font-semibold text-[#181818]">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.9989 13.4295C13.722 13.4295 15.1189 12.0326 15.1189 10.3095C15.1189 8.58633 13.722 7.18945 11.9989 7.18945C10.2758 7.18945 8.87891 8.58633 8.87891 10.3095C8.87891 12.0326 10.2758 13.4295 11.9989 13.4295Z" stroke="#0E7A60" strokeWidth="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#0E7A60" strokeWidth="1.5" />
                                        </svg>
                                    </span>
                                    <span className="text-xs text-gray-500">Street Springfield, IL 62704</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Benefits */}
                    <div className="">
                        <h3 className="text-[#000] text-[16px] font-medium">Total Benefits:</h3>
                        <ul className="list-inside list-disc mt-2 text-sm text-gray-600">
                            <li className="flex items-center text-[#7F7F7F] gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#0E7A60" />
                                </svg>
                                Each user saves around $13/hr
                            </li>
                            <li className="flex items-center gap-2 text-[#7F7F7F]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#0E7A60" />
                                </svg>
                                Provider gets 3 jobs together in one trip
                            </li>
                            <li className="flex items-center gap-2 text-[#7F7F7F]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#0E7A60" />
                                </svg>
                                Reduced travel and time cost
                            </li>
                            <li className="flex items-center gap-2 text-[#7F7F7F]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#0E7A60" />
                                </svg>
                                Higher priority service for bundled requests
                            </li>
                        </ul>
                    </div>

                    <div className='flex justify-between items-center gap-[45px]'>
                        {/* Pricing */}
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <div className="text-[#F34F4F] text-[16px] font-semibold">$68/hr</div>
                                <div className="text-[#000] text-[16px] font-semibold">$55/hr</div>
                            </div>
                            <span className="text-[12px] text-[#0E7A60]">-$13</span>
                        </div>

                        {/* Join Bundle Button */}
                        <div className="">
                            <button
                                onClick={() => setOpen(false)} // Close modal on button click
                                className="whitespace-nowrap joinBundle text-[18px] text-white  font-medium"
                            >
                                Join Bundle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const FindArea = () => {
    // this is for modal open and close 
    const [open, setOpen] = useState(false)
    // this is for modal data
    const [modaData, setModalData] = useState(null)
    // this is for handle open function
    const handleOpen = (value) => {
        setModalData(value)
        setOpen(!open)
    }
    // User data
    const profile = [
        {
            "name": "Jacob Brothers",
            "initials": "JB",
            "rating": 5.0,
            "reviews": 11,
            "location": "Street Springfield, IL 62704",
            "description": "Plumbing Drain Repair, Plumbing Pipe Repair, Plumbing Pipe Installation or Replacement, Sink or Faucet Repair, Sink or Faucet Installation or…",
            "price": "$100 - 120",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg",
            "active": true
        },
        {
            "name": "Alice Smith",
            "initials": "AS",
            "rating": 4.8,
            "reviews": 24,
            "location": "12 Green Valley, NY 10001",
            "description": "Electricity Repair, Installation, and Maintenance.",
            "price": "$80 - 100",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg",
            "active": true
        },
        {
            "name": "Samuel James",
            "initials": "SJ",
            "rating": 4.9,
            "reviews": 18,
            "location": "45 Oak Road, NY 11801",
            "description": "HVAC Services, Heating Repair, Air Conditioning Installation",
            "price": "$150 - 200",
            "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg",
            "active": false
        },
        {
            "name": "Olivia Turner",
            "initials": "OT",
            "rating": 4.7,
            "reviews": 32,
            "location": "101 Pine Street, CA 90210",
            "description": "Carpentry, Furniture Building, Renovation Services",
            "price": "$120 - 160",
            "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg",
            "active": false
        },
        {
            "name": "William Brown",
            "initials": "WB",
            "rating": 4.6,
            "reviews": 16,
            "location": "321 Oakwood Avenue, TX 75001",
            "description": "General Handyman Services, Plumbing, and Electrical Repairs",
            "price": "$90 - 130",
            "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg",
            "active": true
        },
        {
            "name": "Sophia Williams",
            "initials": "SW",
            "rating": 4.8,
            "reviews": 10,
            "location": "9 Maple Avenue, FL 33101",
            "description": "Roofing Services, Roof Repair and Replacement",
            "price": "$200 - 250",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg",
            "active": true
        },
        {
            "name": "Ethan Davis",
            "initials": "ED",
            "rating": 5.0,
            "reviews": 40,
            "location": "58 Cedar Boulevard, WA 98001",
            "description": "Landscaping, Lawn Care, Gardening Services",
            "price": "$60 - 90",
            "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg",
            "active": true
        },
        {
            "name": "Mia Johnson",
            "initials": "MJ",
            "rating": 4.7,
            "reviews": 15,
            "location": "77 Birchwood, OH 44101",
            "description": "Painting, Interior and Exterior Home Painting",
            "price": "$100 - 150",
            "imageUrl": "https://randomuser.me/api/portraits/women/8.jpg",
            "active": false
        }
    ]



    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of profiles per page

    // Render stars dynamically based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Number of full stars
        const halfStar = rating % 1 >= 0.5; // Determine if there's a half star
        const emptyStars = 5 - Math.ceil(rating); // Empty stars to make 5 total

        const stars = [];

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>&#9733;</span>); // Full star (★)
        }

        // Add half star if applicable
        if (halfStar) {
            stars.push(<span key="half">&#9733;</span>); // Half star (★)
        }

        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>&#9734;</span>); // Empty star (☆)
        }

        return stars;
    };

    // Calculate the range of profiles to display
    const indexOfLastProfile = currentPage * rowsPerPage;
    const indexOfFirstProfile = indexOfLastProfile - rowsPerPage;
    const currentProfiles = profile.slice(indexOfFirstProfile, indexOfLastProfile);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(profile.length / rowsPerPage);

    return (
        <div className='w-full'>
            {/* Hero section */}
            <div className='px-[126px]'>
                <div className='flex justify-between items-center mt-[138px] mb-[73px] w-full gap-[54px]'>
                    {/* Hero text */}
                    <div className='flex-1 flex flex-col gap-[44px]'>
                        <h1 className='userHero_head'>
                            You. Your Neighbors. Saving time and money on home services with <span className='text-[38px] font-semibold text-[#0E7A60]'>Naibrly</span>.
                        </h1>
                        {/* Search part */}
                        <div className='flex flex-col gap-4'>
                            <div className='relative'>
                                <input className='search_bar' type="text" placeholder='What do you need help With?' />
                                <div className='absolute right-0 top-0 rounded-[20px] h-full flex justify-center items-center'>
                                    <div className='relative'>
                                        <svg className='absolute right-[80px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.9989 13.4295C13.722 13.4295 15.1189 12.0326 15.1189 10.3095C15.1189 8.58633 13.722 7.18945 11.9989 7.18945C10.2758 7.18945 8.87891 8.58633 8.87891 10.3095C8.87891 12.0326 10.2758 13.4295 11.9989 13.4295Z" stroke="#0E7A60" strokeWidth="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#0E7A60" strokeWidth="1.5" />
                                        </svg>
                                        {/* Location input */}
                                        <input className='rounded-[20px] h-full text-end pr-5 text-[16px] font-medium text-[#000]' type="text" placeholder='152643' />
                                    </div>
                                </div>
                            </div>
                            {/* Submit button */}
                            <div className='input_submit cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 22L20 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <button className='text-[16px] font-semibold text-white cursor-pointer'>Find your area</button>
                            </div>
                        </div>
                    </div>
                    {/* Hero image part */}
                    <div className='flex justify-center items-center flex-1 w-full gap-[29px]'>
                        <div className='w-full flex flex-col gap-[29px]'>
                            <Image className='img1' src={Images.left1} alt='h' />
                            <Image className='img2' src={Images.left2} alt='h' />
                        </div>
                        <div className='w-full'>
                            <Image className='img3' src={Images.right} alt='h' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Plumbers near you section */}
            <div className='px-[126px]'>
                <div className='border-b border-[#E9ECED] pb-[17px]'>
                    <h1 className='Plumbers'>Plumbers near you</h1>
                    <p className='Plumbers_text lg:w-[840px]'>
                        Plumbers often repair clogged drains, leaky faucets, or faulty water heaters — helping protect your home from water damage and keep your systems running smoothly.
                    </p>
                </div>
            </div>
            {/* this  is for Bundles */}
            <div className='px-[126px] flex flex-col gap-7 mt-[46px]'>
                <h1 className='text-[#2F3033] text-[28px] font-semibold'>Bundles</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                    {
                        bundlesData.map(bundle => {
                            return <div key={bundle.id} className="bundle_card">
                                <div className="flex justify-between items-start w-full">
                                    <h2 className="text-[18px] font-medium text-[#000]">Window Washing</h2>
                                    <Image className='rounded-full' src={bundle.image} alt="" height={50} width={50} />
                                </div>

                                <div className="w-full">
                                    <p className="text-[16px] font-medium text-[#333]">3-Person Bundle (2 Joined, 1 Spot Open)</p>
                                    <div className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.9989 13.4295C13.722 13.4295 15.1189 12.0326 15.1189 10.3095C15.1189 8.58633 13.722 7.18945 11.9989 7.18945C10.2758 7.18945 8.87891 8.58633 8.87891 10.3095C8.87891 12.0326 10.2758 13.4295 11.9989 13.4295Z" stroke="#292D32" strokeWidth="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#292D32" strokeWidth="1.5" />
                                        </svg>
                                        <p className="text-[14px] text-[#666]">Street Springfield, IL 62704</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#F34F4F] text-[16px] font-semibold">$68/hr</span>
                                        <span className="text-[#000] text-[16px] font-semibold">$55/hr</span>
                                        <span className="text-[#0E7A60] text-[16px] font-semibold">-$13</span>
                                    </div>

                                    <div onClick={() => handleOpen(bundle)} className="flex justify-end">
                                        <button className="bundle_view text-[18px] text-[#0E7A60]">View details</button>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
                <div className='flex justify-center items-center '>
                    <button className='view_all text-2xl text-[#0E7A60] font-medium'>view_all</button>
                </div>
            </div>
            {/* Top pros for your project */}
            <div className='top_pros'>
                <div className='px-[126px]'>
                    <h1 className='top_pros_head'>Top pros for your project</h1>
                    <div className='mt-[28px] flex flex-col gap-[18px]'>
                        {/*  */}
                        <div className='user_card flex justify-center items-center'>
                            <div className='flex flex-col gap-2'>
                                <div className=''>
                                    <Image src={Images.top_group} alt='top_group' />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[#000] text-[14px] font-medium'>$10</span>
                                    <span className='text-[#7F7F7F] text-[14px] font-medium'>avg. rate is $56.78/hr</span>
                                    <span className='text-[#000] text-[14px] font-medium'>$150+</span>
                                </div>
                            </div>
                        </div>
                        {currentProfiles.map(user => {
                            return (
                                <div className='user_card flex justify-between' key={user.name}>
                                    {/* Profile icon and details */}
                                    <div className='flex justify-center items-start gap-[18px]'>
                                        <div className='user_profile flex justify-center items-center'>
                                            <img src={user.imageUrl} alt={user.name} className="w-16 h-16 rounded-full" />
                                        </div>
                                        <div className='lg:w-[749px] flex flex-col gap-[6px]'>
                                            <div className='flex items-center gap-3'>
                                                <h1 className='text-[#2F3033] text-[18px] font-medium'>{user.name}</h1>
                                                <span>
                                                    {
                                                        user.active ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                            <rect width="28" height="28" rx="14" fill="#00CD49" fillOpacity="0.1" />
                                                            <circle cx="14" cy="14" r="7" fill="#0E7A60" />
                                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                            <rect width="28" height="28" rx="14" fill="#EBEBEB" />
                                                            <circle cx="14" cy="14" r="7" fill="#666666" />
                                                        </svg>
                                                    }

                                                </span>
                                            </div>
                                            {/* Rating */}
                                            <div className='star'>Exceptional {user.rating} {renderStars(user.rating)} ({user.reviews})</div>
                                            {/* Location */}
                                            <div className='flex gap-2 items-center'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M11.9989 13.4295C13.722 13.4295 15.1189 12.0326 15.1189 10.3095C15.1189 8.58633 13.722 7.18945 11.9989 7.18945C10.2758 7.18945 8.87891 8.58633 8.87891 10.3095C8.87891 12.0326 10.2758 13.4295 11.9989 13.4295Z" stroke="#0E7A60" strokeWidth="1.5" />
                                                        <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#0E7A60" strokeWidth="1.5" />
                                                    </svg>
                                                </span>
                                                <span>{user.location}</span>
                                            </div>
                                            <p className='star_des'>{user.description}</p>
                                        </div>
                                    </div>

                                    {/* Estimated price and View Profile */}
                                    <div className='flex flex-col justify-between h-full gap-[77px]'>
                                        <div>
                                            <p className='text-[#2F3033] text-[18px] font-medium'>{user.price}</p>
                                            <span className='text-[18px] font-medium text-[#676D73]'>Estimated price</span>
                                        </div>
                                        <div className='mt-auto'>
                                            <button className='view_button text-[18px] font-medium text-[#FFFFFF]'>View Profile</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-end items-center mt-4">
                        <div className='flex items-center gap-[43px]'>
                            <div className='flex justify-center items-center gap-3'>
                                Rows Per Page:
                                <select className='page_number' value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                </select>
                            </div>
                            <div className='flex justify-center items-center gap-[28px]'>
                                <div className='text-[16px] text-[#333]'>
                                    Page {currentPage} of {totalPages}
                                </div>
                                <div className='flex justify-center items-center gap-3'>
                                    <button
                                        className='page_number'
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <MdArrowBackIosNew />
                                    </button>
                                    <button
                                        className='page_number'
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <MdArrowForwardIos />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* this is for What people say about Us. */}
                    <div className='flex justify-center items-center gap-[90px] px-[128px] py-[120px]'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-[18px]'>
                                <h1 className='people_head flex flex-col'>
                                    <span>
                                        What people say
                                    </span>
                                    <span className='text-[#0E7A60]'>
                                        about Us.
                                    </span>
                                </h1>
                                <p className=' text-[#666] text-[18px]'>Our Clients send us bunch of smilies with our <br /> services and we love them.</p>
                            </div>
                            <div className='flex items-center justify-items-center gap-6'>
                                <button className='left_arrow'><IoArrowBack color='black' />
                                </button>
                                <button className='right_arrow'><IoArrowForwardSharp color='white' />
                                </button>
                            </div>
                        </div>
                        <div className='relative'>
                            {/* this is top left corner img */}
                            <Image className='absolute -left-[26px] -top-[26px]' src={Images.pakistani} alt='' height={55} width={55} />
                            {/* this is card 1 */}
                            <div className='people_card p-6 z-10'>
                                <h1 className='text-[16px] font-semibold text-[#333] p-3'>Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it</h1>
                                <h3 className='text-[12px] font-semibold text-[#333]'>Mike taylor</h3>
                                <p className='text-[11px] font-semibold text-[#666]'>Lahore, Pakistan</p>
                            </div>
                            <div className='people_card2 absolute top-[85px] left-[53px] -z-10 flex items-end pb-[19px] pl-[25px]'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-[#333] text-sm font-semibold'>Chris Thomas</h1>
                                    <h2 className='text-[#666] font-[500] text-[10px]'>CEO of Red Button</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <NaibrlyLanding />
            </div>
            {/*  this is for modal openig*/}
            {
                open && <BundleCard setOpen={setOpen} modaData={modaData} />
            }
        </div>
    );
};

export default FindArea;
