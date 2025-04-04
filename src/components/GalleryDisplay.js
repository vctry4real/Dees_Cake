import { useAnimate } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

export const GalleryDisplay = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MouseImageTrail
      renderImageBuffer={isMobile ? 100 : 50} // Larger buffer for mobile
      rotationRange={10}
      images={[
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
        "/images/image6.jpg",
        "/images/image7.jpg",
        "/images/image8.jpg",
        "/images/image9.jpg",
        "/images/image10.jpg",
      ]}
      isMobile={isMobile}
    >
      {/* Image Display Section */}
      <section className="relative h-screen w-full overflow-hidden bg-white">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-pink-50 to-white">
          {/* Pink accent elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-70"></div>
          
          {/* Subtle texture overlay */}
          <div className="absolute opacity-10 inset-0 w-full h-full"
               style={{
                 backgroundImage: "radial-gradient(circle at 25% 25%, rgba(219, 39, 119, 0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(219, 39, 119, 0.2) 1px, transparent 1px)",
                 backgroundSize: "60px 60px"
               }}>
          </div>
        </div>
        
        {/* Pink accent shapes - Adjusted visibility for mobile */}
        <div className="absolute top-12 left-12 w-20 md:w-40 h-20 md:h-40 border border-pink-200 opacity-50 rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-20 md:w-40 h-20 md:h-40 border border-pink-300 opacity-40 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-px h-16 md:h-32 bg-pink-300 opacity-30 hidden sm:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 md:w-32 h-px bg-pink-300 opacity-30 hidden sm:block"></div>
        
        {/* Center Feature */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 md:px-0">
          <div className="relative backdrop-blur-md bg-white bg-opacity-70 border border-pink-200 shadow-lg shadow-pink-100/50 overflow-hidden p-6 md:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 md:w-6 h-4 md:h-6 border-t border-l border-pink-600"></div>
            <div className="absolute top-0 right-0 w-4 md:w-6 h-4 md:h-6 border-t border-r border-pink-600"></div>
            <div className="absolute bottom-0 left-0 w-4 md:w-6 h-4 md:h-6 border-b border-l border-pink-600"></div>
            <div className="absolute bottom-0 right-0 w-4 md:w-6 h-4 md:h-6 border-b border-r border-pink-600"></div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-light tracking-widest text-copy mb-2 md:mb-3">ARTISANAL CREATIONS</h2>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent my-4 md:my-6"></div>
              <p className="text-pink-600 font-light text-xs md:text-sm tracking-wider uppercase mb-4 md:mb-8">Exquisite Cakes Crafted By Dee&apos;s Cake</p>
              
              <p className="text-gray-600 text-xs md:text-sm font-light tracking-wide mb-6 md:mb-10">
                Experience our gallery of bespoke confections, each a masterpiece of culinary artistry and uncompromising quality.
              </p>
              
              <div className="inline-block border border-pink-600 px-4 md:px-8 py-2 md:py-3 mt-2 md:mt-4 group relative overflow-hidden hover:border-purple-400 transition-colors duration-300">
                <div className="absolute inset-0 w-0 bg-pink-50 group-hover:w-full transition-all duration-500"></div>
                <div className="flex items-center justify-center gap-2 md:gap-3 relative">
                  <FiMousePointer className="text-pink-600 text-sm md:text-base" />
                  <span className="text-pink-600 text-xs md:text-sm uppercase tracking-widest">
                    {isMobile ? "Tap to View" : "Explore"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
  isMobile
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);
  const touchStartTime = useRef(0);
  const [imgSize, setImgSize] = useState({ width: 200, height: 200 });

  // Adjust image size based on screen width
  useEffect(() => {
    const updateImgSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setImgSize({ width: 200, height: 200 });
      } else if (width < 1024) {
        setImgSize({ width: 180, height: 180 });
      } else {
        setImgSize({ width: 200, height: 400 });
      }
    };
    
    updateImgSize();
    window.addEventListener('resize', updateImgSize);
    
    return () => window.removeEventListener('resize', updateImgSize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Skip mouse tracking on mobile

    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    
    touchStartTime.current = Date.now();
    
    const touch = e.touches[0];
    lastRenderPosition.current.x = touch.clientX;
    lastRenderPosition.current.y = touch.clientY;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    
    const touch = e.touches[0];
    const { clientX, clientY } = touch;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const handleTouchEnd = (e) => {
    if (!isMobile) return;
    
    // If it was a quick tap (less than 300ms), render an image
    if (Date.now() - touchStartTime.current < 300) {
      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);
    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}

      {images.map((img, index) => (
        <Image
          className="pointer-events-none absolute left-0 top-0 object-cover opacity-0 shadow-xl"
          style={{ 
            borderBottom: '1px solid rgba(219, 39, 119, 0.3)',
            borderRadius: '4px',
            filter: 'drop-shadow(0 4px 6px rgba(219, 39, 119, 0.1))',
            height: isMobile ? `${imgSize.height * 1}px` : `${imgSize.height}px`,
            width: 'auto'
          }}
          src={img}
          alt={`Dee's luxury cake showcase ${index}`}
          key={index}
          width={imgSize.width}
          height={imgSize.height}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};