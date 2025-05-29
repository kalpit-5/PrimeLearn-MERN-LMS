import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const handleSubscribe = () => {
    if (!isEmailValid) {
      toast.error("Please enter a valid email!");
      setEmail("");
      return;
    }
    toast.success("Subscribed to PrimeLearns! 🎉");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Join a vibrant community of learners and educators on a platform
            that combines innovation, accessibility, and depth to redefine how
            knowledge is delivered and absorbed.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            Your inbox, your knowledge hub—subscribe for the latest in online
            education.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
              type="email"
              placeholder="Enter your email"
            />

            <button
              onClick={handleSubscribe}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
        </div> */}
        <div className="hidden md:flex flex-col items-start w-full">]
        {/* <div className="flex items-center gap-2 pt-4"> */}
        <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter 📩
          </h2>
          <p className="text-sm text-white/80">
            Your inbox, your knowledge hub—subscribe for the latest in online
            education.
          </p>
          <div className="flex items-center gap-2 pt-4">
<input
            className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubscribe}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Subscribe
          </button>

          </div>
          
        </div>
        </div>
      
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © PrimeLearn. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
