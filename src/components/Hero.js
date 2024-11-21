"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

    
const Hero = () =>{
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:pt-[20px] md:grid-cols-2 items-center gap-8 max-w-6xl m-auto">
          <div>
            <span className="block mb-4 text-xs md:text-sm text-colorText-second font-medium">
              Indulge in Sweet Temptations at Dee&apos;s Cake!
            </span>
            <h3 className="text-4xl md:text-6xl font-semibold">
              Where Every Bite Tells a Sweet Story
            </h3>
            <p className="text-base md:text-lg text-colorText-default my-4 md:my-6">
              It&apos;s not just a dessert; its a slice of happiness, savor each bite, every crumb tells a story of contentment
            </p>
            <button className="bg-secondary-default text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
              Explore Our Delicious Creations
            </button>
          </div>
          <ShuffleGrid />
        </section>
      );
    };
    
    const shuffle = (array) => {
      let currentIndex = array.length,
        randomIndex;
    
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
    
      return array;
    };
    
    const squareData = [
      {
        id: 1,
        src: "./image1.jpg"
      },
      {
        id: 2,
        src: "./image2.jpg",
      },
      {
        id: 3,
        src: "./image3.jpg",
      },
      {
        id: 4,
        src: "./image4.jpg",
      },
      {
        id: 5,
        src: "./image5.jpg",
      },
      {
        id: 6,
        src: "./image6.jpg",
      },
      {
        id: 7,
        src: "./image7.jpg",
      },
      {
        id: 8,
        src: "./image8.jpg",
      },
      {
        id: 9,
        src: "./image9.jpg",
      },
      {
        id: 10,
        src: "./image10.jpg",
      },
      {
        id: 11,
        src: "./image11.jpg",
      },
      {
        id: 12,
        src: "./image12.jpg",
      },
      {
        id: 13,
        src: "./image13.jpg",
      },
      {
        id: 14,
        src: "./image14.jpg",
      },
      {
        id: 15,
        src: "./image15.jpg",
      },
      {
        id: 16,
        src: "./image16.jpg",
      },
    ];
    
    const generateSquares = () => {
      return shuffle(squareData).map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      ));
    };
    
    const ShuffleGrid = () => {
      const timeoutRef = useRef(null);
      const [squares, setSquares] = useState(generateSquares());
    
      useEffect(() => {
        shuffleSquares();
    
        return () => clearTimeout(timeoutRef.current);
      }, []);
    
      const shuffleSquares = () => {
        setSquares(generateSquares());
    
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };
    
      return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
          {squares.map((sq) => sq)}
        </div>
      );
};

export default Hero;
