import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <PageContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const PageContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
        <p className="text-center text-primary-second">
            Dee&apos;s Cake Blog 📺
        </p>
        <h2 className="text-center text-6xl font-black text-colorText-second">
            COMING SOON
        </h2>
        
        <div className="flex items-center justify-center gap-3">
            <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-primary-second transition-colors hover:bg-neutral-800">
                Our Cakes
            </button>
            <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
                Our Services
            </button>
        </div>
    </div>
  );
};

export default ComingSoon;