import Image from "next/image";
import Stats from "@/components/Stats"
import HoverDevCards from "@/components/HoverDevCards";
import { RevealBento } from "@/components/BentoBox";
import AboutCTA from "@/components/CTA";

export default function About() {
    return (
        <main className="w-full h-full flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
            {/* Hero Section with Stats */}
            <section className="w-full py-20">
                <div className="max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 md:justify-between mx-auto md:gap-x-14 gap-y-14">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-6">
                            <div>
                                <h3 className="text-lg text-pink-600">About Dee&apos;s Cake</h3>
                                <h1 className="text-4xl text-gray-900 tracking-widest font-semibold">
                                    The Artisans Behind Your Sweet Moments
                                </h1>
                            </div>
                            <p className="text-sm text-gray-600 leading-loose">
                                Welcome to Dee&apos;s Cake, where passion meets precision in every creation. Founded by Master Baker Diana &apos;Dee&apos; [Last Name], our journey began with a simple belief: every celebration deserves something extraordinary.
                            </p>
                            <p className="text-sm text-gray-600 leading-loose">
                                Our story started in 2015 in a small kitchen with big dreams. Today, we&apos;re proud to be [City]&apos;s premier destination for custom cakes and fine pastries. Our team of skilled artisans combines traditional baking methods with innovative designs to create edible masterpieces that taste as amazing as they look.
                            </p>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex gap-x-5 divide-x divide-pink-100">
                            <div className="flex flex-col gap-y-2 p-4">
                                <div className="text-pink-600">
                                    <Stats endValue={1000} duration={2000} />
                                </div>
                                <h3 className="text-sm font-medium text-gray-600">Loved by</h3>
                            </div>
                            <div className="flex flex-col gap-y-2 p-4">
                                <div className="text-pink-600">
                                    <Stats endValue={3000} duration={2000} />
                                </div>
                                <h3 className="text-sm font-medium text-gray-600">Sold</h3>
                            </div>
                            <div className="flex flex-col gap-y-2 p-4">
                                <div className="text-pink-600">
                                    <Stats endValue={2000} duration={2000} />
                                </div>
                                <h3 className="text-sm font-medium text-gray-600">Orders</h3>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full h-[600px] relative overflow-hidden">
                        <Image
                            src="/corporatedara.jpg"
                            alt="Dee's cake founder image"
                            fill
                            className="object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style = {{objectPosition : "center left"}}
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col gap-y-8 mb-12">
                        <h2 className="text-4xl text-center text-gray-900 font-semibold">
                            Our Philosophy
                        </h2>
                        <p className="text-sm text-center text-gray-600 max-w-2xl mx-auto">
                            At Dee&apos;s Cake, we believe that every celebration deserves something extraordinary. Our approach combines artistry with excellence.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                        <HoverDevCards />
                    </div>
                </div>
            </section>

            {/* Kitchen Section */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-6xl mx-auto mb-20 px-4 flex flex-col gap-y-9">
                    <div className="max-w-2xl flex flex-col gap-y-3 justify-center items-center mx-auto">
                        <h3 className="text-lg text-pink-600">Our Workspace</h3>
                        <h2 className="text-4xl text-center text-gray-900 font-semibold">
                            Where Magic Happens
                        </h2>
                        <p className="text-sm text-center text-gray-600">
                            Our state-of-the-art kitchen in Port-harcourt is where magic happens daily. We maintain the highest standards of cleanliness and food safety while creating our edible masterpieces.
                        </p>
                    </div>
                    <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                        <RevealBento />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16">
                
                <AboutCTA/>
            </section>
        </main>
    )
}