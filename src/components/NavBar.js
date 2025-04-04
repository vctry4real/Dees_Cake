"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAtTop, setIsAtTop] = useState(true)

    const handleNavOpen = () => {
        setNav(true)
    }

    const handleNavClose = () => {
        setNav(false)
    }

    // Navigation links array to maintain consistency
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/services", label: "Our Services" },
        { href: "/blog", label: "Blog" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact" }
    ]

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if at the top of the page
            setIsAtTop(currentScrollY === 0)

            // Determine scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and not near top
                setIsVisible(false)
            } else {
                // Scrolling up or near top
                setIsVisible(true)
            }

            // Clear previous timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }

            // Set a timeout to show navbar when scrolling stops
            scrollTimeout = setTimeout(() => {
                // Only hide when scrolled down significantly
                if (currentScrollY > 300) {
                    setIsVisible(false)
                }
            }, 3000) // 3 seconds after last scroll for better UX

            // Update last scroll position
            setLastScrollY(currentScrollY)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Initial check for top of page
        setIsAtTop(window.scrollY === 0)

        // Cleanup the event listener and timeout
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        }
    }, [lastScrollY])

    return (
        <div 
            className={`
                w-full 
                fixed 
                top-0 
                left-0 
                z-50 
                transition-all 
                duration-300 
                ${isAtTop ? 'bg-transparent' : 'bg-white shadow-md'}
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="container mx-auto px-4 w-full flex items-center justify-between py-1">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/daraLogo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.href} className="transform motion-safe:hover:scale-110">
                            <Link 
                                href={link.href} 
                                className={`${isAtTop ? 'text-black hover:text-pink-600' : 'hover:text-pink-600'}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className={`
                            font-medium py-2 px-4 rounded transition-all transform motion-safe:hover:scale-110 active:scale-95
                            ${isAtTop 
                                ? 'bg-pink-600 border border-pink-600 text-white hover:bg-white hover:text-pink-600'
                                : 'bg-pink-600 border border-pink-600 text-white hover:bg-white hover:text-pink-600'
                            }
                        `}>
                            Place Order
                        </button>
                    </li>
                </ul>

                {/* Mobile Navigation Container */}
                <div className="md:hidden relative">
                    {/* Hamburger Menu Icon */}
                    <div 
                        className={`cursor-pointer ${isAtTop ? 'text-black' : 'text-black'}`}
                        onClick={handleNavOpen}
                    >
                        <GiHamburgerMenu className="text-2xl" />
                    </div>
                    
                    {/* Mobile Navigation Menu */}
                    {nav && (
                        <>
                            {/* Backdrop */}
                            <div 
                                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                                onClick={handleNavClose}
                            />
                            {/* Dropdown positioned below the hamburger icon */}
                            <div className="absolute top-10 right-0 w-64 bg-white z-50 shadow-lg rounded-md py-4">
                                {/* Close Button */}
                                <div 
                                    className="absolute top-2 right-2 cursor-pointer"
                                    onClick={handleNavClose}
                                >
                                    <IoCloseSharp className="text-2xl" />
                                </div>

                                <ul className="flex flex-col space-y-4 px-4 pt-6">
                                    {navLinks.map((link) => (
                                        <li key={link.href} className="border-b border-zinc-200 w-full pb-2">
                                            <Link 
                                                href={link.href} 
                                                onClick={handleNavClose}
                                                className="block hover:text-pink-600 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="pt-2">
                                        <button className="w-full bg-pink-600 text-white font-medium py-2 px-4 rounded transition-all hover:bg-pink-700 active:scale-95">
                                            Place Order
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar