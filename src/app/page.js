import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import MenuData from "@/components/ArrayData/MenuData";
import PastriesData from "@/components/ArrayData/PastriesData"
import Image from "next/image";
import { ServicesData } from "@/components/ArrayData/ServicesData";
import { ServiceCards } from "@/components/ServiceCards";
import Packages from "@/components/Packages";
import TestimonialSection from "@/components/Testimonial";
import Accordion from "@/components/Acordion";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
      <div>
        <div>
          <Hero />
        </div>
        {/* Stats Section */}
        <div className="w-full bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-lg shadow-sm hover:shadow-md transition-shadow mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-4">
            <div className="flex flex-col gap-y-3 items-center">
              <div className="p-3 bg-pink-100 rounded-lg">
                <div className="h-[40px] w-[40px] relative">
                  <Image
                    src="/smiley-emoji.png"
                    alt="100% satisfaction"
                    fill 
                    className="object-fill  "

                  />
                </div>
              </div>
              <p className="text-gray-900 font-semibold text-center">100% Satisfaction</p>
            </div>

            {/* Divider - only visible on sm screens and up */}
            <div className="hidden sm:block w-px h-20 border-b-2 border-blue-700 "></div>

            <div className="flex flex-col gap-y-3 items-center">
              <div className="p-3 bg-pink-100 rounded-lg">
                <div className="h-[40px] w-[40px] relative">
                    <Image
                      src="/delivery-icon.png"
                      alt="100% satisfaction"
                      fill 
                      className="object-fill  "

                    />
                  </div>
              </div>
              <p className="text-gray-900 font-semibold text-center">20-40 mins delivery time</p>
            </div>

            {/* Divider - only visible on sm screens and up */}
            <div className="hidden sm:block w-px h-20 bg-pink-100"></div>

            <div className="flex flex-col gap-y-3 items-center">
              <div className="p-3 bg-pink-100 rounded-lg">
                <div className="h-[40px] w-[40px] relative">
                    <Image
                      src="/check-icon.png"
                      alt="100% satisfaction"
                      fill 
                      className="object-fill  "

                    />
                  </div>
              </div>
              <p className="text-gray-900 font-semibold text-center">100+ Completed orders</p>
            </div>
          </div>
        </div>

        {/* Landing About section */}
        <div className="mt-12 md:mt-16 lg:mt-20 w-full bg-white">
          <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
            <div className="flex flex-col gap-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
                {/* Image container - full width on mobile, half on md+ */}
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-hidden">
                  <Image
                    src="/chef.jpg"
                    alt="Chef Image"
                    fill
                    className="object-cover rounded-lg shadow-sm"
                    // sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectPosition: 'center top' }}
                    priority
                  />
                </div>
                {/* Content container - full width on mobile, half on md+ */}
                <div className="w-full h-full flex flex-col">
                  <div>
                    <h3 className="text-base md:text-lg text-pink-600">
                      The Journey so far
                    </h3>
                    <h1 className="text-lg md:text-xl text-gray-900 tracking-widest font-semibold">
                      Our Story
                    </h1>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mt-4 md:mt-5 font-medium">
                    Where Cake Becomes Art
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-medium">
                    &
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-medium">
                    Sweetness is an Experience
                  </h2>
                  <blockquote className="text-xl italic font-semibold text-gray-900">
                    <p className="text-xs sm:text-sm text-gray-600 mt-4 md:mt-5 leading-loose line-clamp-4 md:line-clamp-none">
                      If life has taught us one lesson, it&apos;s this:
                      &apos;&apos; People will forget what you said, people will
                      forget what you did, but people will never forget how you
                      made them feel &apos;&apos; . At our bakery, we believe in
                      creating unforgettable experiences through our cakes. Each
                      creation is crafted with love and care, aiming to leave a
                      lasting impression of joy and sweetness.
                    </p>
                  </blockquote>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 mt-6 md:mt-8 lg:mt-10 rounded-lg transition-colors active:scale-95 w-full sm:w-auto">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our cakes and pastries display */}
        <div className=" px-8 py-8 mt-[40px] md:mt-[90px] md:gap-8 max-w-6xl m-auto">
          <div className="w-full flex flex-col gap-y-8">
            <h2 className="text-xl md:text-4xl text-center tracking-widest text-gray-900">
              Why we are the best
            </h2>
            <p className="text-sm text-center tracking-wide text-gray-600 line-clamp-4">
              Delicious meals made with farm-fresh, organic ingredients,
              delivered to your door and ready in minutes
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex items-center justify-around gap-x-3">
              <Carousel 
                data={MenuData} 
                itemsToShow={4} 
                title={"Our Cakes"} 
                subtitle={"Freshly baked"}
              />
            </div>
            <div className="flex items-center justify-around gap-x-3">
              <Carousel 
                data={PastriesData} 
                itemsToShow={4} 
                title={"Our Pastries"} 
                subtitle={"Top quality"}
              />
            </div>
          </div>
        </div>

        {/*Our Services*/}
        <section className="bg-white py-16">
          <div className="md:gap-8 max-w-6xl flex flex-col gap-y-7 m-auto px-4">
            <h3 className="text-lg text-colorText-second text-center">Our Services</h3>
            <h2 className="text-2xl font-medium text-gray-900 text-center">Creating Sweet Magic for Every Occasion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              {
                ServicesData.map((service)=>(
                  <ServiceCards key={service.id}
                    image={service.image}
                    title={service.title}
                    text = {service.text}
                  />
                ))
              }
          </div>
          </div>
          
        </section>

        {/*Our Packages*/}
        <section className="w-full py-16">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-7">
            <div className="md:gap-8 max-w-6xl flex flex-col gap-y-5 m-auto px-4">
              <h3 className="text-lg text-colorText-second text-center">Our Packages</h3>
              <h2 className="text-2xl font-medium text-gray-900 text-center">Celebration Packages for Every Moment</h2>
            </div>
            <div>
              <Packages/>
            </div>
          </div>
        </section>

        {/*Testimonial */}
        <section id="testimonial" className="bg-white pb-16">
          <div className=" md:max-w-6xl mx-auto">
              
              <div>
                <TestimonialSection/>
              </div>
          </div>
        </section>

        {/*FAQ Accordion*/}    
        <section id="faq" className="w-full py-16">
              <div className=" md:max-w-6xl mx-auto flex flex-col gap-y-5">
                <h4 className="text-sm text-colorText-second text-center">Let&apos;s Answer Some Questions</h4>
                <h2 className="text-3xl tracking-wider font-medium text-gray-900 text-center">FAQs</h2>
                <div className="mt-7">
                  <Accordion/>
                </div>
              </div>
        </section>
      </div>
    </main>
  );
}