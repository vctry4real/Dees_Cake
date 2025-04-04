"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SubscriptionForm from "@/components/SubscriptionForm"
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

    return (
        <div className="w-full h-full py-6 md:py-10 bg-black">
            <div className="max-w-6xl px-4 flex flex-col gap-y-6 md:gap-y-8 mx-auto">
                <div className="w-full flex items-center justify-center">
                    <div className="relative flex w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]">
                        <Image
                            src="/daraLogo.png"
                            alt="Dee's Cake Logo"
                            fill
                        />
                    </div>
                </div>
                <motion.div 
                    className="w-full flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between"
                    initial="hidden"
                    animate="visible"
                >
                    {/* Footer Quick Links */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-white border-b-2 border-white pr-4 sm:pr-10 md:pr-16 pb-1">Quick Links</h4>
                            <div className="flex flex-col gap-y-2">
                                <p>
                                    <Link href="/about" className="font-medium text-sm text-gray-200">About Us</Link>
                                </p>
                                <p> 
                                    <Link href="/service" className="font-medium text-sm text-gray-200">Our Services</Link>
                                </p>
                                <p>
                                    <Link href="/contact us" className="font-medium text-sm text-gray-200">Visit Us</Link>
                                </p>
                            </div>
                        </div>

                        {/* Help Links */}
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-white border-b-2 border-white pr-4 sm:pr-10 md:pr-16 pb-1">Help</h4>
                            <div className="flex flex-col gap-y-2">
                                <motion.p variants={linkVariants}>
                                    <Link href="/#faq" scroll={false} className="font-medium text-sm text-gray-200">FAQs</Link>
                                </motion.p>
                                <motion.p variants={linkVariants}>
                                    <Link href="/contact" className="font-medium text-sm text-gray-200">Contact Us</Link>
                                </motion.p>
                                <motion.p variants={linkVariants}>
                                    <Link href="/contact" className="font-medium text-sm text-gray-200">Location</Link>
                                </motion.p>
                            </div>
                        </div>

                        {/* Get in touch Links */}
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-white border-b-2 border-white pr-4 sm:pr-10 md:pr-16 pb-1">Get In Touch</h4>
                            <div className="flex flex-col gap-y-3">
                                <p className="flex items-start md:items-center gap-x-3">
                                   <span className="mt-1 md:mt-0"><FaMapMarkerAlt className="text-primary-second" /></span> 
                                   <Link href="/about" className="font-medium text-sm text-gray-200">14 E 12th St,New York, NY 10007, United States</Link>
                                </p>
                                <p className="flex items-center gap-x-3"> 
                                    <span><MdAttachEmail className="text-primary-second" /></span>
                                    <Link href="/service" className="font-medium text-sm text-gray-200">info@deescake.com</Link>
                                </p>
                                <p className="flex items-center gap-x-3">
                                    <span><FaPhoneAlt className="text-primary-second" /></span>
                                    <Link href="/contact us" className="font-medium text-sm text-gray-200">+234907647904</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer News Letter Subscription */}
                    <div className="w-full lg:w-auto flex flex-col gap-y-3">
                        <h4 className="font-bold text-white border-b-2 border-white pr-4 sm:pr-10 md:pr-16 pb-1">Subscribe To Our Newsletter</h4>
                        <div className="w-full">
                            <SubscriptionForm />
                        </div>
                    </div>
                </motion.div>
                <div className="w-full mt-4">
                    <div className="flex justify-center items-center gap-x-6">
                        <Link href="#"><IoLogoWhatsapp className="text-xl md:text-2xl text-primary-second"/></Link>
                        <Link href="#"><FaSquareXTwitter className="text-xl md:text-2xl text-primary-second"/></Link>
                        <Link href="#"><FaInstagramSquare className="text-xl md:text-2xl text-primary-second"/></Link>
                    </div>
                </div>
                {/* Elegant Footer - Responsive padding */}
                <div className="w-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 text-center">
                    <p className="text-xs text-gray-500 tracking-wider">
                        <span className="text-pink-600">© {new Date().getFullYear()}</span> Dee&apos;s Cakes • All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;