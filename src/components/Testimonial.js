"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & James',
    event: 'Wedding Cake',
    date: 'June 2023',
    photo: '/client-1.jpg',
    review: "Dee created our dream wedding cake! Not only was it visually stunning, but the taste was absolutely incredible. Our guests couldn't stop raving about it!",
    rating: 5
  },
  {
    id: 2,
    name: 'Emily John',
    event: 'Birthday Celebration',
    date: 'March 2024',
    photo: '/client-2.jpg',
    review: "The custom cake for my mom's 70th birthday was a masterpiece! Every detail was perfect, and it tasted even better than it looked.",
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Thompson',
    event: 'Corporate Event',
    date: 'January 2024',
    photo: '/client-3.jpg',
    review: "Professional, creative, and absolutely delicious. Our company event cake was a hit and perfectly represented our brand.",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="bg-custom-bg py-16 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-copy mb-6"
        >
          Sweet Words from Our Clients
        </motion.h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div 
          key={currentTestimonial}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white shadow-lg rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary-foreground"
            >
              <Image 
                src={testimonials[currentTestimonial].photo} 
                alt={testimonials[currentTestimonial].name}
                width={96} 
                height={96} 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          <div className="flex justify-center text-secondary-default mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                fill={i < testimonials[currentTestimonial].rating ? "#DB2777" : "none"}
                className="w-6 h-6"
              />
            ))}
          </div>

          <p className="text-lg md:text-xl text-colorText-default italic mb-6">
            {testimonials[currentTestimonial].review}
          </p>

          <div className="text-copy font-semibold">
            {testimonials[currentTestimonial].name} 
            <span className="text-colorText-second ml-2">
              | {testimonials[currentTestimonial].event}, {testimonials[currentTestimonial].date}
            </span>
          </div>

          <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 flex justify-between px-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial} 
              className="bg-secondary-foreground p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="text-secondary-default" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial} 
              className="bg-secondary-foreground p-2 rounded-full shadow-md"
            >
              <ChevronRight className="text-secondary-default" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary-default text-primary-first px-6 border border-secondary-default py-3 rounded-lg font-semibold hover:text-secondary-default hover:bg-secondary-foreground transition-colors"
        >
          conviced? Book a consultation
        </motion.button>
      </div>
    </section>
  );
};

export default TestimonialSection;