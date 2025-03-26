"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("custom");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const weddingServices = [
    "Custom wedding cakes",
    "Dessert tables",
    "Wedding favor boxes",
    "Free consultation and tasting",
    "Setup and styling",
    "Emergency backup cake service"
  ];

  const corporateServices = [
    "Branded desserts",
    "Corporate event catering",
    "Client gift boxes",
    "Team celebration cakes",
    "Bulk orders",
    "Regular delivery service"
  ];

  const customCakePricingTable = [
    { tier: "Standard", serving: "Up to 20", price: "$150+", features: "Basic design, 2 flavor options" },
    { tier: "Premium", serving: "20-50", price: "$250+", features: "Custom design, 3 flavor options, basic decorations" },
    { tier: "Luxury", serving: "50-100", price: "$400+", features: "Complex design, unlimited flavors, premium decorations" },
    { tier: "Ultimate", serving: "100+", price: "Custom Quote", features: "Fully bespoke design, specialty ingredients, delivery included" }
  ];

  const celebrationPackages = [
    {
      name: "Birthday Essentials",
      price: "$199",
      features: [
        "6-inch custom cake",
        "12 cupcakes",
        "Personalized cake topper",
        "Candles and sparklers"
      ]
    },
    {
      name: "Party Premium",
      price: "$349",
      features: [
        "8-inch custom cake",
        "24 cupcakes",
        "Cake pops (dozen)",
        "Custom cookies (dozen)",
        "Decorative setup"
      ]
    },
    {
      name: "Grand Celebration",
      price: "$599",
      features: [
        "Tiered custom cake",
        "Mini dessert selection (50 pieces)",
        "Custom backdrop design",
        "Setup and styling",
        "Delivery included"
      ]
    }
  ];

  // Gallery images for hover preview
  const galleryImages = [
    { src: "/weddingCake1.jpg", alt: "Wedding Cake" },
    { src: "/weddingPastries2.jpg", alt: "Wedding Pastries" },
    { src: "/weddingCake3.jpg", alt: "Wedding Cake" },
    { src: "/weddingPastries3.jpg", alt: "Wedding Servings" },
  ];

  const corporateGalleryImages = [
    { src: "/corporateEvent5.jpg", alt: "Corporate Events" },
    { src: "/corporateEvent2.jpg", alt: "Corporate Parties" },
    { src: "/corporateEvent3.jpg", alt: "Office Parties" },
    { src: "/corporateEvent4.jpg", alt: "Corporate Dinner" },
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
        activeTab === id 
          ? "bg-pink-600 text-white shadow-lg" 
          : "bg-white text-neutral-700 hover:bg-pink-100"
      }`}
    >
      <span className="mr-1 md:mr-2">{icon}</span>
      {label}
    </button>
  );

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src="/image16.jpg"
            alt="Dee's Cakes Banner"
            fill
            priority
            className="object-cover brightness-75"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-4xl leading-tight drop-shadow-lg"
          >
            Our Services - Creating Sweet Magic for Every Occasion
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button 
              onClick={() => {
                document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 md:mt-8 bg-white text-pink-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base md:text-lg font-medium hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg flex items-center"
            >
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Service Navigation Tabs */}
      <div id="services-section" className="sticky top-0 bg-neutral-50 z-30 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-2 justify-start sm:justify-center">
            <TabButton id="custom" label="Custom Cakes" icon="🎂" />
            <TabButton id="wedding" label="Wedding Services" icon="💍" />
            <TabButton id="corporate" label="Corporate Events" icon="💼" />
            <TabButton id="packages" label="Celebration Packages" icon="🎉" />
          </div>
        </div>
      </div>
      
      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="custom-cakes"
          style={{ display: activeTab === "custom" ? "block" : "none" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-4 sm:mb-8 text-center">Custom Cake Design</h2>
          <p className="text-neutral-600 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-6 sm:mb-12">
            From concept to creation, we bring your vision to life. Our custom cake service includes:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {["Personal consultation", "Design sketching", "Flavor customization", "Dietary accommodation", "Professional delivery"].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{"👩‍🍳 ✏️ 🍰 🌱 🚚".split(" ")[i]}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item}</h3>
                <p className="text-neutral-600 text-sm sm:text-base">
                  {[
                    "One-on-one design sessions with our cake artists",
                    "Visual concepts to ensure your vision comes to life",
                    "Endless combinations to delight your taste buds",
                    "Gluten-free, vegan options available",
                    "Safe transport to your venue"
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Pricing Table with hover effects */}
          <div className="mb-10 md:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-4 sm:mb-6 text-center">Custom Cake Pricing</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-pink-600 text-white">
                  <tr>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-left text-sm md:text-base">Service Tier</th>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-left text-sm md:text-base">Servings</th>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-left text-sm md:text-base">Starting Price</th>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-left text-sm md:text-base">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {customCakePricingTable.map((tier, index) => (
                    <motion.tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-neutral-50" : "bg-white"}
                      whileHover={{ backgroundColor: "rgba(249, 168, 212, 0.1)" }}
                    >
                      <td className="py-2 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">{tier.tier}</td>
                      <td className="py-2 md:py-4 px-3 md:px-6 text-sm md:text-base">{tier.serving}</td>
                      <td className="py-2 md:py-4 px-3 md:px-6 text-sm md:text-base">{tier.price}</td>
                      <td className="py-2 md:py-4 px-3 md:px-6 text-sm md:text-base">{tier.features}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>
        
        {/* Wedding Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
          style={{ display: activeTab === "wedding" ? "block" : "none" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6 sm:mb-8 text-center">Wedding Services</h2>
          
          {/* Image Gallery Preview */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 sm:mb-12">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-2 sm:p-4 font-medium text-sm sm:text-base">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {weddingServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center">
                  <div className="text-pink-600 mr-3">✓</div>
                  <p className="text-neutral-700 text-sm sm:text-base">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Corporate Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
          style={{ display: activeTab === "corporate" ? "block" : "none" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6 sm:mb-8 text-center">Corporate Services</h2>
          {/* Gallery for corporate services */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 sm:mb-12">
            {corporateGalleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-2 sm:p-4 font-medium text-sm sm:text-base">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Corporate services list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {corporateServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center">
                  <div className="text-pink-600 mr-3">✓</div>
                  <p className="text-neutral-700 text-sm sm:text-base">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Celebration Packages Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
          style={{ display: activeTab === "packages" ? "block" : "none" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6 sm:mb-8 text-center">Celebration Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {celebrationPackages.map((pkg, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                onClick={() => handlePackageSelect(pkg)}
              >
                <div className="bg-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{pkg.price}</p>
                </div>
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm sm:text-base">
                        <span className="text-pink-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 sm:mt-6 bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* CTA Button - always visible */}
        <div className="text-center py-6 sm:py-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-pink-700 transition-colors duration-300 shadow-lg"
          >
            Book Your Consultation
          </motion.button>
        </div>
      </div>
      
      {/* Testimonial Section with Parallax */}
      <div className="bg-neutral-100 py-10 sm:py-16 md:py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 relative z-10"
        >
          <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4 sm:mb-8">What Our Clients Say</h2>
            <blockquote className="text-base sm:text-lg md:text-xl italic text-neutral-700 mb-4 sm:mb-6">
              Dee&apos;s Cakes created the most beautiful and delicious wedding cake for our special day. 
              Their attention to detail and creativity exceeded our expectations!
            </blockquote>
            <cite className="text-neutral-600 font-medium text-sm sm:text-base">— Grace Foutut</cite>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-pink-200 opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-pink-300 opacity-20"></div>
      </div>
      
      {/* Package Selection Modal */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-xs sm:max-w-sm md:max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-3 sm:mb-4">{selectedPackage.name}</h3>
            <p className="text-pink-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">{selectedPackage.price}</p>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="font-medium mb-2 text-sm sm:text-base">Included in this package:</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {selectedPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-neutral-700 mb-1 sm:mb-2 text-sm sm:text-base">Select a date:</label>
              <input 
                type="date" 
                className="w-full border border-neutral-300 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
              />
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-neutral-700 mb-1 sm:mb-2 text-sm sm:text-base">Special requests:</label>
              <textarea 
                className="w-full border border-neutral-300 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
                rows="3"
                placeholder="Tell us about your event..."
              ></textarea>
            </div>
            
            <div className="flex space-x-3">
              <button 
                className="flex-1 bg-pink-600 text-white py-1.5 sm:py-2 rounded-md hover:bg-pink-700 transition-colors text-sm sm:text-base"
                onClick={() => setShowModal(false)}
              >
                Book This Package
              </button>
              <button 
                className="flex-1 bg-neutral-200 text-neutral-700 py-1.5 sm:py-2 rounded-md hover:bg-neutral-300 transition-colors text-sm sm:text-base"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;