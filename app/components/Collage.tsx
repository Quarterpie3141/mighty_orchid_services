'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Collage = ({ items, animate }:any) => {
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

export default Collage;