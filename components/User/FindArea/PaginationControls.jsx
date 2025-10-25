"use client"
import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

const PaginationControls = ({
    currentPage,
    totalPages,
    rowsPerPage,
    setRowsPerPage,
    setCurrentPage
}) => {
    return (
        <div className="flex justify-end items-center mt-4">
            <div className='flex items-center gap-[43px]'>
                <div className='flex justify-center items-center gap-3'>
                    Rows Per Page:
                    <select
                        className='page_number'
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    >
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
    )
}

export default PaginationControls
