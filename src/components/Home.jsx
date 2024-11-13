import React, { useState } from 'react'
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {

    const [itemCounts, setItemCounts] = useState({
        item1: 1,
        item2: 1,
        item3: 1,
        item4: 1,
        item5: 1,
        item6: 1,
        item7: 1,
        item8: 1,
        item9: 1,
    })
    const [likedItems, setLikedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
        item7: false,
        item8: false,
        item9: false,
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

                <div className='flex flex-wrap justify-evenly items-start pt-12 sm:pt-24 gap-10 w-screen'>
                    <div className='flex flex-col justify-center gap-5 '>
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

                    <div className='flex flex-col lg:w-2/3'>
                        <Carousel showThumbs={false} showStatus={false} interval={2000} transitionTime={500} autoPlay infiniteLoop className='setcarouselwidth '>

                            <div className='flex flex-wrap gap-16 justify-center colflex'>
                                {/* 1st */}
                                <div className='flex flex-col w-60'>
                                    <img src={a} alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 10.99</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item1', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item1}
                                            <button onClick={() => handleQuantityChange('item1', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light tracking-widest text-zinc-500 flex items-start'>
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
                                <div className='flex flex-col w-60'>
                                    <img src={b} alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 15.99</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item2', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item2}
                                            <button onClick={() => handleQuantityChange('item2', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500  flex items-start'>
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
                                <div className='flex flex-col w-60'>
                                    <img src={c} alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 20.99</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item3', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item3}
                                            <button onClick={() => handleQuantityChange('item3', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
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

                            <div className='flex flex-wrap gap-16 justify-center colflex'>
                                {/* 4th */}
                                <div className='flex flex-col w-60'>
                                    <img src="https://www.jiomart.com/images/product/original/rvn0kinays/suveharts-wall-hanging-decorative-items-wall-hanging-home-decor-wall-hangings-wall-hangings-decor-wall-decor-items-rnr-36-product-images-orvn0kinays-p604573193-4-202309141524.jpg?im=Resize=(420,420)" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 15</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item4', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item4}
                                            <button onClick={() => handleQuantityChange('item4', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Decor Wall Hanging
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>

                                        </div>
                                        <div onClick={() => toggleLike('item4')} className='text-3xl cursor-pointer'>
                                            {likedItems.item4 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                                {/* 5th */}
                                <div className='flex flex-col w-60'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hOb-NqBG47bvDw4rx23s9mqIp-xdD-42LQ&s" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 35.99</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item5', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item5}
                                            <button onClick={() => handleQuantityChange('item5', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Hand Embroidered Decor
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>

                                        </div>
                                        <div onClick={() => toggleLike('item5')} className='text-3xl cursor-pointer'>
                                            {likedItems.item5 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                                {/* 6th */}
                                <div className='flex flex-col w-60'>
                                    <img src="data:image/jpeg;base64,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" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 40.58</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item6', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item6}
                                            <button onClick={() => handleQuantityChange('item6', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Royal Candel holder
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>

                                        </div>
                                        <div onClick={() => toggleLike('item6')} className='text-3xl cursor-pointer'>
                                            {likedItems.item6 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-16 justify-center colflex'>
                                {/* 7th */}
                                <div className='flex flex-col w-60'>
                                    <img src="https://zugunu.com/wp-content/uploads/2021/09/In-Circle-Antique-Peacock-Wall-Decor-1.jpg" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 20.25</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item7', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item7}
                                            <button onClick={() => handleQuantityChange('item7', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Peacock Antique Light
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>

                                        </div>
                                        <div onClick={() => toggleLike('item7')} className='text-3xl cursor-pointer'>
                                            {likedItems.item7 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                                {/* 8th */}
                                <div className='flex flex-col w-60'>
                                    <img src="https://m.media-amazon.com/images/I/41LAJo6htrS.jpg" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 12.99</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item8', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item8}
                                            <button onClick={() => handleQuantityChange('item8', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Wooden Cave Decor
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>
                                            Set of 4
                                        </div>
                                        <div onClick={() => toggleLike('item8')} className='text-3xl cursor-pointer'>
                                            {likedItems.item8 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                                {/* 9th */}
                                <div className='flex flex-col w-60'>
                                    <img src="https://www.partypropz.com/cdn/shop/files/81ts3fez1ML._SX679.jpg?v=1711660212" alt="towel" className='w-60 border border-black' />
                                    <div className='flex justify-between pt-3'>
                                        <span className='font-bold text-2xl'>$ 8</span>

                                        <div className='flex border border-black rounded-full gap-3 px-3 py-1 '>

                                            <button onClick={() => handleQuantityChange('item9', -1)} className='border border-black px-2 py-0 rounded-full'>-</button>
                                            {itemCounts.item9}
                                            <button onClick={() => handleQuantityChange('item9', 1)} className='border border-black px-2 py-0 rounded-full'>+</button>
                                        </div>
                                    </div>
                                    <div className='font-light  tracking-widest text-zinc-500 flex items-start'>
                                        Party Props
                                    </div>
                                    <div className='flex justify-between items-center  text-zinc-500'>

                                        <div className='font-light tracking-widest'>

                                        </div>
                                        <div onClick={() => toggleLike('item9')} className='text-3xl cursor-pointer'>
                                            {likedItems.item9 ? '❤️' : '♡'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
