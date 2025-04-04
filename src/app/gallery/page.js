"use client"

import { GalleryDisplay } from "@/components/GalleryDisplay"
import { motion } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"
import { useEffect, useState } from "react"

export default function Gallery() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch with client-side detection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-28 md:pt-20 overflow-hidden">
      {/* Elegant Header Section */}
      <div className="relative w-full pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-tr from-pink-50 via-white to-purple-50 opacity-70"></div>
          <div className="absolute top-32 -left-24 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full bg-pink-100 mix-blend-multiply opacity-30 blur-3xl"></div>
          <div className="absolute bottom-32 -right-24 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full bg-purple-100 mix-blend-multiply opacity-30 blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-30"></div>
        </div>

        {/* Elegant Title Display */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : false}
            animate={isMounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <div className="h-px w-6 sm:w-8 md:w-12 bg-pink-300 mr-2 sm:mr-3 md:mr-4 opacity-70"></div>
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-pink-600 font-light">Exquisite Creations</h3>
              <div className="h-px w-6 sm:w-8 md:w-12 bg-pink-300 ml-2 sm:ml-3 md:ml-4 opacity-70"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-copy text-center tracking-wider mb-2 sm:mb-3">
              Dee&apos;s <span className="font-normal text-pink-600">Cake</span> Gallery
            </h1>
            
            <p className="text-center text-gray-600 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base leading-relaxed px-2">
              Welcome to our curated collection of artisanal confections. Each creation is meticulously crafted with premium ingredients and artistic excellence to transform your special moments into unforgettable memories.
            </p>
          </motion.div>
          
          {/* Delicate Divider - Responsive sizing */}
          <div className="w-full flex justify-center my-6 sm:my-8 md:my-10 lg:my-12">
            <div className="w-16 sm:w-20 md:w-24 relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-600 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 sm:w-2 sm:h-2 rounded-full border border-pink-600"></div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center mt-2 sm:mt-3 md:mt-4"
            initial={isMounted ? { opacity: 0 } : false}
            animate={isMounted ? { opacity: 1 } : false}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              animate={isMounted ? { y: [0, 8, 0] } : false}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center text-pink-600 cursor-pointer"
              onClick={() => window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              })}
            >
              <span className="text-xs uppercase tracking-widest mb-1 sm:mb-2">Explore Gallery</span>
              <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Display Component */}
      <div className="flex-1 w-full">
        {isMounted && <GalleryDisplay />}
      </div>
      
      
    </main>
  )
}