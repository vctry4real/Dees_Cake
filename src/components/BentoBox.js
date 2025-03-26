"use client"
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const RevealBento = () => {
  return (
    <div className="w-full h-auto  text-zinc-50">
      
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid w-full grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        
      </motion.div>
      
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 relative">
    <Image
      src="/kitchen.jpg"
      alt="avatar"
      width={200}
      height={200}
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      State of the art kitchen.{" "}
      <span className="text-zinc-400">
        And top equipments 
      </span>
    </h1>
    
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3 relative"
    >
        <Image
            src="/kitchen.jpg"
            alt="avatar"
            fill
            className="object-cover mb-4 size-14 "
        />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3 relative"
    >
        <Image
            src="/kitchen4.jpg"
            alt="dee's cake kitchen image"
            fill
            className="object-cover mb-4 size-14 "
        />
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3 relative"
    >
      <Image
            src="/kitchen2.jpg"
            alt="dee's cake kitchen image"
            fill
            className="object-cover mb-4 size-14 "
        />
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3 relative"
    >
      <Image
            src="/kitchen3.jpg"
            alt="dee's cake kitchen image"
            fill
            className="object-cover mb-4 size-14 "
        />
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="h-[200px] col-span-12 text-3xl leading-snug relative">
    <Image
            src="/kitchen5.jpg"
            alt="dee's cake kitchen image"
            fill
            className="object-cover mb-4 size-14 "
        />
  </Block>
);







