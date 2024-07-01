'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// collage images to cyle through
const collage_images =[
    <img key={'0'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/TQ8WpCy.png' alt=''/>,
    <img key={'1'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/13j0svE.png' alt=''/>,
    <img key={'2'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/7sQiXD6.png' alt=''/>,
    <img key={'3'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/4yOpfWH.png' alt=''/>,
    <img key={'4'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/fcCgUdF.png' alt=''/>,
    <img key={'5'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/Nl2Nish.png' alt=''/>,
    <img key={'6'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/i3Uc328.png' alt=''/>
   ]



export default function Hero(){
    //delays the start of the animation so images can load
    const [animate, setAnimate] = useState(false);
    useEffect(()=>{
        const interval = setInterval(() => {
          setAnimate(true)
      }, 3000);
      
        return () => clearInterval(interval);
      },[])

    return(
        <section>
            <div className='py-15 md:py-20'>
              <div className='container px-4 mx-auto'>
                <div className='flex flex-wrap xl:items-center -mx-4'>
                  <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0 '>
                    <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-transparent uppercase rounded-9xl rounded'>
                      
                    </span>
                    <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight'>
                    People Looking After People.
                    </h1>
                    <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
                    Our commitment as an NDIS services provider ensures that individuals and their families receive support and services adhering to the highest standards of quality and care.
                    </p>
                    <div className='flex flex-wrap'>
                      <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                        <a
                          className='inline-block py-5 px-7 w-full text-base lg:bg md:text-lg leading-4 text-white font-medium text-center bg-mto-blue hover:bg-mto-orange focus:ring-2 focus:ring-white focus:ring-opacity-50 border border-mto-blue rounded-lg shadow-sm transition duration-200'
                          href='#services'
                        >
                          Explore our services
                        </a>
                      </div>
                      <div className='w-full md:w-auto py-1 md:py-0'>
                        <a
                          className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm'
                          href='#contact-form'
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4'>
                    <div className='relative mx-auto md:mr-0 max-w-max'>
                      <img
                        className='absolute z-10 -left-14 -top-12 w-28 md:w-auto'
                        src='svg/circle3-yellow.svg'
                        alt=''
                      />
                      <img className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto' src='svg/dots3-blue.svg' alt=''/>
                      <Collage items={collage_images} animate={animate}></Collage>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )

}



function Collage({ items, animate }:any){
    const [currentItem, setCurrentItem] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(animate){
            setCurrentItem((prevItem) => (prevItem + 1) % items.length);
            }
        }, 12000);

        return () => clearInterval(interval);
    }, [items.length, animate]);

    return (
        <div className="collage-container relative overflow-hidden lg:h-[35rem] md:h-[17rem] h-[18rem]">
            <AnimatePresence mode={ "wait"}>
                <motion.div
                    key={currentItem}
                    layout
                    initial={{ opacity: 0, scale: 0.9}}
                    animate={{ opacity: 1, scale: 1}}
                    exit={{ opacity: 0, scale: 0.9}}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                >
                    {items[currentItem]}
                </motion.div>
            </AnimatePresence>
            <div className=' h-0 w-0'>
                {items[currentItem + 1]}
            </div>
        </div>
    );
};