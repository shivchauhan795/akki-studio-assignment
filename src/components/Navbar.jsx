import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center border border-x-0 gap-32 border-t-0 border-black pt-7 mx-10'>
            <div className='flex justify-center items-center gap-32 font-medium'>

                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>home</span>
                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>blog</span>
                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>about</span>
            </div>
            <div className='flex justify-center items-center border border-y-0 border-black px-14 py-6'>
                <span className='uppercase text-2xl font-semibold cursor-pointer transform transition duration-200 hover:scale-110'>borcelle</span>
            </div>
            <div className='flex justify-center items-center gap-32 font-medium'>

                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>account</span>
                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>shop</span>
                <span className='uppercase text-lg cursor-pointer transform transition duration-200 hover:scale-110'>contact</span>
            </div>
        </div>
    )
}

export default Navbar
