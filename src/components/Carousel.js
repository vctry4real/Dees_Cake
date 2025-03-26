"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// Basic Card Component
const CardContents = ({ src, alt, title }) => {
    return (
        <div className="flex flex-col items-center bg-zinc-20 rounded-lg shadow-xl p-4 w-full">
            <div className="w-full h-[200px] relative">
              <Image 
                  src={src} 
                  alt={alt}
                  fill 
                  className=" object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
    );
};

// Generic Carousel Component
const Carousel = ({ data = [], title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
        setIsMobile(false);
      } else {
        setItemsToShow(3);
        setIsMobile(false);
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? data.length - itemsToShow : prevIndex - 1;
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex >= data.length - itemsToShow ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const visibleCards = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentIndex + i) % data.length;
    visibleCards.push(data[index]);
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 md:gap-8">
        <div className="w-full flex flex-col md:flex-row md:items-center pt-4 md:pt-8">
            <div className="w-full pb-4 md:pb-8">
                <h4 className="text-lg md:text-xl text-secondaryText font-bold">{title}</h4>
                <h3 className="text-2xl md:text-4xl font-bold">{subtitle}</h3>
            </div>
            <div className="w-full flex items-center gap-x-3 justify-start md:justify-end mt-2 md:mt-0">
                <button
                    className="bg-yellow-300 text-lg md:text-xl flex items-center justify-center cursor-pointer rounded-full w-10 h-10 md:w-12 md:h-12"
                    onClick={handleLeftClick}
                    aria-label="Previous slide"
                >
                    <FaArrowAltCircleLeft />
                </button>
                <button
                    className="bg-green-300 text-lg md:text-xl flex items-center justify-center cursor-pointer rounded-full w-10 h-10 md:w-12 md:h-12"
                    onClick={handleRightClick}
                    aria-label="Next slide"
                >
                    <FaArrowAltCircleRight />
                </button>
            </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {visibleCards.map((item, index) => (
                <CardContents
                    key={`card-${currentIndex}-${index}`}
                    src={item.src}
                    alt={item.text}
                    title={item.title}
                />
            ))}
        </div>
    </div>
  );
};

export default Carousel;