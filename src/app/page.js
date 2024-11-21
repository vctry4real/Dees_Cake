import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <div className="">
        <div className="">
          <Hero />
        </div>
        <div className="w-full bg-secondary-foreground px-8 py-8 rounded-2xl shadow-2xl mt-[90px] md:gap-8 max-w-6xl m-auto ">
          <div className="flex items-center justify-around">
            <div className="flex flex-col gap-y-3 items-center ">
              <p>Icon</p>
              <p>100% Satisfaction</p>
            </div>

            <div className="w-[2px] h-[80px] border-[1px] border-slate-300"></div>

            <div className="flex flex-col gap-y-3 items-center">
              <p>Icon</p>
              <p>20-40 mins delivery time</p>
            </div>

            <div className="w-[2px] h-[80px] border-[1px] border-slate-300"></div>

            <div className="flex flex-col gap-y-3 items-center">
              <p>Icon</p>
              <p>100+ Completed orders</p>
            </div>
          </div>
        </div>

        {/* Landing About section */}
        <div className="mt-[90px] w-full f-full  bg-secondary-foreground  ">
          <div className="  py-[90px] md:gap-8 max-w-6xl m-auto ">
            <div className="flex flex-col gap-y-8">
              {/* <div>
                <h3 className="text-lg text-colorText-default text-center ">
                  The Journey so far
                </h3>
                <h1 className="text-4xl text-center tracking-widest font-semibold ">
                  Our Story
                </h1>
              </div> */}
              <div className="grid grid-cols-2 gap-x-14">
                <div className="w-full h-[500px] relative  overflow-hidden">
                  <Image
                    src="/chef.jpg"
                    alt="Chef Image"
                    width={500}
                    height={500}
                    contain
                    // sizes="100vh"
                    className="object-cover rounded-2xl "
                  />
                </div>
                <div className="w-full h-full flex flex-col ">
                  <div>
                    <h3 className="text-lg text-colorText-default ">
                      The Journey so far
                    </h3>
                    <h1 className="text-xl tracking-widest font-semibold ">
                      Our Story
                    </h1>
                  </div>
                  <h2 className="text-4xl text-colorText-default mt-[20px] font-medium line-clamp-3">
                    Where Cake Becomes Art
                  </h2>
                  <h2 className="text-4xl text-colorText-default font-medium line-clamp-3">
                    &
                  </h2>
                  <h2 className="text-4xl text-colorText-default font-medium line-clamp-3">
                    Sweetness is an Experience
                  </h2>
                  <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <p className="text-sm text-colorText-default mt-[20px] leading-loose line-clamp-4 ">
                      If life has taught us one lesson, it&apos;s this:
                      &apos;&apos; People will forget what you said, people will
                      forget what you did, but people will never forget how you
                      made them feel &apos;&apos; . At our bakery, we believe in
                      creating unforgettable experiences through our cakes. Each
                      creation is crafted with love and care, aiming to leave a
                      lasting impression of joy and sweetness.
                    </p>
                  </blockquote>
                  <button className="bg-secondary-default w-[140px] text-white font-medium py-2 px-4 mt-[40px] rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our cakes display */}
        <div className=" w-full px-8 py-8 rounded-2xl  mt-[90px] md:gap-8 max-w-6xl m-auto  ">
          <div className="w-full flex flex-col gap-y-8">
            <h2 className="text-4xl text-center tracking-widest text-colorText-second ">
              Why we are the best
            </h2>
            <p className="text-sm text-center tracking-wide line-clamp-4">
              Delicious meals made with farm-fresh, organic ingredients,
              delivered to your door and ready in minutes
            </p>
          </div>
          <div className="flex items-center justify-around gap-x-3">
            <Carousel/>
          </div>
        </div>
      </div>
    </main>
  );
}
