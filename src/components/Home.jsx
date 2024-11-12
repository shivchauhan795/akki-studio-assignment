import React from 'react'
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
const Home = () => {
    return (
        <div>
            <div>
                <div className='uppercase font-semibold text-7xl text-center tracking-widest w-screen p-5'>
                    new home collection
                </div>

                <div className='flex justify-evenly items-start pt-24'>
                    <div className='flex flex-col justify-center gap-5'>
                        <div className='uppercase text-4xl'>
                            home <br />products <br /> and interior
                        </div>
                        <div className=''>
                            <button className='uppercase rounded-full bg-[#8f87666c] px-10 py-3 text-lg font-normal border border-black'>shop now</button>
                            <span className='w-40 text-5xl'>
                                &rarr;
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-16'>
                            {/* 1st */}
                            <div className='flex flex-col '>
                                <img src={a} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 10.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button className='border border-black px-2 py-0 rounded-full'>-</button>
                                        1
                                        <button className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                    Set of towels
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>
                                        + More colors
                                    </div>
                                    <div className='text-3xl'>
                                        &#x2661;
                                    </div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className='flex flex-col '>
                                <img src={b} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 15.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button className='border border-black px-2 py-0 rounded-full'>-</button>
                                        1
                                        <button className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                    Interior decorations
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>
                                        + More colors
                                    </div>
                                    <div className='text-3xl'>
                                        &#x2661;
                                    </div>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col '>
                                <img src={c} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 20.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button className='border border-black px-2 py-0 rounded-full'>-</button>
                                        1
                                        <button className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                Basket made of natural
                                material
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>
                                       
                                    </div>
                                    <div className='text-3xl'>
                                        &#x2661;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
