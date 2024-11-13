import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className='flex justify-center items-center border border-x-0 border-t-0 border-black pt-7 mx-10 gap-32 gapspace hidedisplay'>
                <div className='flex justify-center items-center font-medium gap-32 gapspace'>

                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>home</span>
                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>blog</span>
                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>about</span>
                </div>
                <div className='flex justify-center items-center border border-y-0 border-black px-14 py-6 xpadding'>
                    <span className='uppercase text-2xl font-semibold cursor-pointer transform transition duration-200 hover:scale-110'>borcelle</span>
                </div>
                <div className='flex justify-center items-center font-medium gap-32 gapspace'>

                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>account</span>
                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>shop</span>
                    <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>contact</span>
                </div>
            </div>

            <div className='hidden justify-evenly  border border-x-0 border-t-0 border-black pt-7 mx-10 gap-32 showdisplay'>

                <div className='flex justify-start items-start px-14 py-6 xpadding'>
                    <span className='uppercase text-2xl font-semibold cursor-pointer transform transition duration-200 hover:scale-110'>borcelle</span>
                </div>
                <div className='flex justify-center items-center text-3xl xpadding'>
                    <GiHamburgerMenu className='cursor-pointer' onClick={toggleMenu} />
                </div>
            </div>
            {menuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 z-50'>
                    <div className='flex justify-end p-4'>
                        <IoMdClose
                            className="text-3xl text-white cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-6 text-white h-full'>
                        <span className='text-2xl uppercase cursor-pointer'>home</span>
                        <span className='text-2xl uppercase cursor-pointer'>blog</span>
                        <span className='text-2xl uppercase cursor-pointer'>about</span>
                        <span className='text-2xl uppercase cursor-pointer'>account</span>
                        <span className='text-2xl uppercase cursor-pointer'>shop</span>
                        <span className='text-2xl uppercase cursor-pointer'>contact</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar


// 2xl:gap-32 xl:gap-32 lg:gap-32 md:gap-12 sm:gap-5