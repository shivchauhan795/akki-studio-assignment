import React, { useState } from 'react'
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
const Home = () => {

    const [itemCounts, setItemCounts] = useState({
        item1: 1,
        item2: 1,
        item3: 1,
    })
    const [likedItems, setLikedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
    })
    const handleQuantityChange = (item, increment) => {
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [item]: Math.max(1, prevCounts[item] + increment) // Ensures count doesn't go below 1
        }));
    }
    const toggleLike = (item) => {
        setLikedItems((prevLiked) => ({
            ...prevLiked,
            [item]: !prevLiked[item]
        }));
    }

    return (
        <div>
            <div>
                <div className='uppercase font-semibold text-5xl text-wrap sm:text-7xl text-center tracking-widest w-screen p-5'>
                    new home collection
                </div>

                <div className='flex flex-wrap justify-evenly items-start pt-12 sm:pt-24 gap-10 '>
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
                        <div className='flex flex-wrap gap-16 justify-center'>
                            {/* 1st */}
                            <div className='flex flex-col '>
                                <img src={a} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 10.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button onClick={() => handleQuantityChange('item1', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                        {itemCounts.item1}
                                        <button onClick={() => handleQuantityChange('item1', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                    Set of towels
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>
                                        + More colors
                                    </div>
                                    <div onClick={() => toggleLike('item1')} className='text-3xl cursor-pointer'>
                                        {likedItems.item1 ? '❤️' : '♡'}
                                    </div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className='flex flex-col '>
                                <img src={b} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 15.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button onClick={() => handleQuantityChange('item2', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                        {itemCounts.item2}
                                        <button onClick={() => handleQuantityChange('item2', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                    Interior decorations
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>
                                        + More colors
                                    </div>
                                    <div onClick={() => toggleLike('item2')} className='text-3xl cursor-pointer'>
                                        {likedItems.item2 ? '❤️' : '♡'}
                                    </div>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col '>
                                <img src={c} alt="towel" className='w-60 border border-black' />
                                <div className='flex justify-between pt-3'>
                                    <span className='font-bold text-2xl'>$ 20.99</span>

                                    <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                        <button onClick={() => handleQuantityChange('item3', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                        {itemCounts.item3}
                                        <button onClick={() => handleQuantityChange('item3', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                    </div>
                                </div>
                                <div className='font-light  tracking-widest text-zinc-500'>
                                    Basket made of natural
                                    material
                                </div>
                                <div className='flex justify-between items-center  text-zinc-500'>

                                    <div className='font-light tracking-widest'>

                                    </div>
                                    <div onClick={() => toggleLike('item3')} className='text-3xl cursor-pointer'>
                                        {likedItems.item3 ? '❤️' : '♡'}
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
