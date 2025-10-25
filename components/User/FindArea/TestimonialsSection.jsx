"use client"
import { Images } from '@/public/usersImg/ExportImg'
import Image from 'next/image'
import React from 'react'
import { IoArrowBack, IoArrowForwardSharp } from "react-icons/io5"

const TestimonialsSection = () => {
    return (
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
                    <p className=' text-[#666] text-[18px]'>
                        Our Clients send us bunch of smilies with our <br /> services and we love them.
                    </p>
                </div>
                <div className='flex items-center justify-items-center gap-6'>
                    <button className='left_arrow'>
                        <IoArrowBack color='black' />
                    </button>
                    <button className='right_arrow'>
                        <IoArrowForwardSharp color='white' />
                    </button>
                </div>
            </div>
            <div className='relative'>
                {/* this is top left corner img */}
                <Image className='absolute -left-[26px] -top-[26px]' src={Images.pakistani} alt='' height={55} width={55} />
                {/* this is card 1 */}
                <div className='people_card p-6 z-10'>
                    <h1 className='text-[16px] font-semibold text-[#333] p-3'>
                        Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes,
                        and he assembled a metal wire shelving unit as well in about 10 minutes.
                        He also fixed a drawer on an already assembled desk so it
                    </h1>
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
    )
}

export default TestimonialsSection
