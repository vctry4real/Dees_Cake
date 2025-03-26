"use client";

import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Example: Send the email to your API route for processing
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-lg max-w-md mx-auto bg-primary-second">
      {/* <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2> */}
      <div className="flex  gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 p-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-secondary-default text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </div>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default SubscriptionForm;
