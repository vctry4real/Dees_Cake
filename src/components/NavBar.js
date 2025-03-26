"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";




const NavBar = () =>{
    const [nav, setNav] = useState(false)
    const handleNavOpen = () =>{
        setNav(!nav)
    }
    const handleNavClose = () =>{
        setNav(!nav)
    }
    return (
        <div className="w-full ">
            <div className="w-full flex gap-9 items-center justify-between">
                <span className="w-full">
                    <Link href="/">
                        <Image
                            src="/daraLogo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                        />
                    </Link>
                </span>
                <ul className="hidden md:flex w-full items-center justify-around">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About us</Link>
                    </li>
                    <li>
                        <Link href="/services">Our Services</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                {/* HamBurger menu */}

                <div className=" md:hidden mr-4" onClick={handleNavOpen}>
                    {!nav ? <GiHamburgerMenu /> : <IoCloseSharp />}
                </div>
                
            </div>
            
            <ul className={!nav ? "hidden" : "w-full flex flex-col items-center gap-y-6 px-4"}>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link href="/"onClick={handleNavClose} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link href="/about" onClick={handleNavClose} smooth={true} duration={-200}>
                        About us
                    </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link href="/services" onClick={handleNavClose} smooth={true} duration={-200}>
                        Our Services
                    </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link href="/blog" onClick={handleNavClose} smooth={true} duration={50}>
                        Blog
                    </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link href="/contact" onClick={handleNavClose} smooth={true} duration={-50}>
                        Contact
                    </Link>
                </li>

                <div className="flex flex-col">
                    <button className="bg-indigo-500 text-white font-medium py-2 px-4 my-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                        Place Order
                    </button>
                    
                </div>
            </ul>
            
        </div>
    )
}

export default NavBar