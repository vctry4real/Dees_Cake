"use client";
import { useMemo, useState } from "react";
import { ArtisanalPastries, CorporateOrders, CustomCakeDesign, WeddingEventCatering } from "./ArrayData/AccordionData";

export default function Accordion() {
  // State to track the active accordion (by id) for FAQ items
  const [activeAccordion, setActiveAccordion] = useState(null);
  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState("Custom Cake");

  // Map the selected category to its corresponding data
  const serviceOption = useMemo(() => {
    const dataMap = {
      "Custom Cake": CustomCakeDesign,
      "Weeding & Events": WeddingEventCatering,
      "Artisanl pastries": ArtisanalPastries,
      "Corporate Orders": CorporateOrders,
    };
    return dataMap[selectedCategory];
  }, [selectedCategory]);

  // Update the selected category when a category button is clicked.
  // Also, reset the active accordion.
  const handleCategoryClick = (event) => {
    const buttonText = event.target.textContent;
    setSelectedCategory(buttonText);
    setActiveAccordion(null); // Reset open accordion when category changes
  };

  // Toggle the individual accordion item based on its id.
  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* FAQ accordion categories - flex-wrap for mobile responsiveness */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <button
          onClick={handleCategoryClick}
          className={`px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg text-colorText-second border border-secondary-default rounded-md transition-colors ${
            selectedCategory === "Custom Cake" ? "text-white bg-secondary-default" : ""
          }`}
        >
          Custom Cake
        </button>

        <button
          onClick={handleCategoryClick}
          className={`px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg text-colorText-second border border-secondary-default rounded-md transition-colors ${
            selectedCategory === "Weeding & Events" ? "text-white bg-secondary-default" : ""
          }`}
        >
          Weeding & Events
        </button>
        <button
          onClick={handleCategoryClick}
          className={`px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg text-colorText-second border border-secondary-default rounded-md transition-colors ${
            selectedCategory === "Artisanl pastries" ? "text-white bg-secondary-default" : ""
          }`}
        >
          Artisanl pastries
        </button>
        <button
          onClick={handleCategoryClick}
          className={`px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg text-colorText-second border border-secondary-default rounded-md transition-colors ${
            selectedCategory === "Corporate Orders" ? "text-white bg-secondary-default" : ""
          }`}
        >
          Corporate Orders
        </button>
      </div>

      {/* FAQ questions for the selected category */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        {serviceOption.map((service) => {
          const isOpen = activeAccordion === service.id;
          return (
            <div key={service.id} className="mt-4 first:mt-0">
              <div className="border rounded-md overflow-hidden shadow-sm">
                <h3
                  className="flex justify-between items-center bg-primary-second p-3 sm:p-4 md:p-5 cursor-pointer text-sm sm:text-base md:text-lg font-medium"
                  onClick={() => toggleAccordion(service.id)}
                >
                  <span className="pr-2">{service.question}</span>
                  <span className="text-xl flex items-center justify-center w-6 h-6">
                    <button className="focus:outline-none" aria-label={isOpen ? "Close accordion" : "Open accordion"}>
                      {isOpen ? "−" : "+"}
                    </button>
                  </span>
                </h3>
                {isOpen && (
                  <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white transition-all">
                    <ul className="pl-4 sm:pl-5 md:pl-6">
                      {service.answers.map((answer, index) => (
                        <li key={index} className="list-disc py-2 sm:py-3 text-colorText-second text-sm sm:text-base">
                          {answer}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}