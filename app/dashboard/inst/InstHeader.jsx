"use client";
import React, { useState } from "react";
import { LuSearch, LuBell } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

// Define the InstHeader component
const InstHeader = () => {
  // State for toggling the sidebar
  const [toggle, setToggle] = useState(false);

  // Function to handle sidebar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Render search bar
  const HandleSearch = () => {
    return (
      <div className="relative">
        {toggle && (
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 md:py-2 w-56 md:w-72 h-8 rounded-full bg-white text-gray-800 focus:outline-none"
          />
        )}

        <LuSearch
          size={28}
          onClick={handleToggle}
          className={`absolute ${
            toggle
              ? "top-0 left-48 md:left-64 lg:scale-75"
              : "-top-3 -left-6 hover:text-white lg:scale-100"
          } text-gray-300 scale-75  cursor-pointer`}
        />
      </div>
    );
  };

  // Render notification bell
  const HandleBell = () => {
    const [showNotification, setShowNotification] = useState(false);

    // Function to toggle notification
    const toggleNotification = () => {
      setShowNotification(!showNotification);
    };

    return (
      <div className="">
        <div className="group relative">
          <div
            className={`relative text-3xl text-gray-300 mx-4 cursor-pointer hover:text-white ${
              showNotification && "text-white"
            }`}
            onClick={toggleNotification}
          >
            {showNotification ? (
              <RxCross2 size={28} />
            ) : (
              <div>
                <LuBell className="scale-75 lg:scale-100" />
                <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600 "></div>
              </div>
            )}
          </div>
        </div>
        {/* Display notification popup if showNotification is true */}
        {showNotification && (
          <div className="absolute top-[5.5rem] right-0 text-wrap lg:right-[6.5rem] text-white bg-black bg-opacity-80 p-4 rounded-lg shadow-lg">
            <p>Notification Content Here</p>
          </div>
        )}
      </div>
    );
  };

  // Render profile section
  const HandleProfile = () => {
    return (
      <div className="flex items-center">
        <img
          className="w-8 lg:w-12 h-8 lg:h-12 rounded-full"
          src="/assets/priyanshu.png"
          alt="Profile"
        />
        <div className="ml-4 hidden lg:block">
          <h2 className="text-lg font-semibold text-white">Priyanshu</h2>
          <p className="text-sm text-gray-300">Admin</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-end md:justify-between items-center cursor-default overflow-hidden">
      {/* Greeting section */}
      <div className="hidden md:block">
        <h3 className=" text-2xl text-white flex flex-col md:flex-row">
          <em>Hello,</em> <span>Priyanshu</span>
        </h3>
      </div>
      {/* Profile section */}
      <section className="flex items-center justify-between md:mt-4">
        {/* Search bar */}
        <HandleSearch />
        {/* Notification bell */}
        <HandleBell />
        {/* Profile */}
        <HandleProfile />
      </section>
    </div>
  );
};

export default InstHeader;
