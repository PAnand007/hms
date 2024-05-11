"use client";
import React, { useState, useEffect } from "react";

// Import required icons from respective libraries
import { LuSearch, LuBell, LuBuilding, LuLogOut } from "react-icons/lu";
import {
  RxCross2,
  RxTriangleDown,
  RxTriangleUp,
  RxTriangleRight,
  RxComponentBoolean,
  RxMixerVertical,
  RxQuestionMarkCircled,
} from "react-icons/rx";

// Define the InstHeader component
const InstHeader = () => {
  // Render search bar
  const HandleSearch = () => {
    // State for toggling the sidebar
    const [toggle, setToggle] = useState(false);

    // Effect to handle click outside notification
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the click is outside of the HandleBell component
        if (toggle && !event.target.closest(".HandleSearch")) {
          setToggle(false);
        }
      };

      // Add event listener to listen for clicks on the document body
      document.body.addEventListener("click", handleClickOutside);

      // Remove the event listener when the component unmounts
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, [toggle]);

    // Function to handle sidebar toggle
    const handleToggle = () => {
      setToggle(!toggle);
    };
    return (
      <div className="HandleSearch relative">
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
              : "-top-3 -left-6 hover:text-slate-500 lg:scale-100"
          } scale-75  cursor-pointer`}
        />
      </div>
    );
  };

  // Render notification bell
  const HandleBell = () => {
    const [showNotification, setShowNotification] = useState(false);

    // Effect to handle click outside notification
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the click is outside of the HandleBell component
        if (showNotification && !event.target.closest(".HandleBell")) {
          setShowNotification(false);
        }
      };

      // Add event listener to listen for clicks on the document body
      document.body.addEventListener("click", handleClickOutside);

      // Remove the event listener when the component unmounts
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, [showNotification]);

    // Function to toggle notification
    const toggleNotification = () => {
      setShowNotification(!showNotification);
    };

    return (
      <div className="HandleBell">
        <div
          className={`relative group text-3xl mx-4 cursor-pointer hover:text-slate-500 ${
            showNotification && "text-slate-500"
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
        {/* Display notification popup if showNotification is true */}
        {showNotification && (
          <div className="absolute top-[5rem] md:top-[5.5rem] right-4 text-wrap lg:right-36 text-white bg-black bg-opacity-80 p-4 rounded-lg shadow-lg">
            <h3 className="text-semibold text-lg underline underline-offset-8">
              Notification
            </h3>
          </div>
        )}
      </div>
    );
  };

  // UserProfile component displays the user's basic information and toggles the profile details
  const UserProfile = ({ user, showProfile, toggleProfile }) => (
    <div
      className="flex gap-3 items-center cursor-pointer"
      onClick={toggleProfile}
    >
      <div className="ml-4 hidden lg:block">
        {/* User name */}
        <h2 className="text-lg font-semibold text-gray-500">{user.name}</h2>
        {/* User role */}
        <p className="text-sm flex justify-end">{user.role}</p>
      </div>
      {/* User profile image */}
      <img
        className="w-8 lg:w-12 h-8 lg:h-12 border-[1px] border-slate-300 rounded-full"
        src={user.image}
        alt="Profile"
      />
    </div>
  );

  // UserProfileDetails component displays the detailed user profile information
  const UserProfileDetails = ({ userProfile, showProfile, toggleProfile }) => {
    // Effect to handle click outside notification
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the click is outside of the UserProfileDetails component
        if (showProfile && !event.target.closest(".UserProfileDetails")) {
          toggleProfile();
        }
      };

      // Add event listener to listen for clicks on the document body
      document.body.addEventListener("click", handleClickOutside);

      // Remove the event listener when the component unmounts
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, [showProfile, toggleProfile]);

    return (
      // Render if showProfile is true
      showProfile && (
        <div className="UserProfileDetails absolute top-[5.5rem] right-4 text-gray-500 bg-[#F6F8FB] p-4 w-64 rounded-lg shadow-lg">
          {/* Close button */}
          <span
            className="cursor-pointer float-end text-slate-400 hover:text-slate-500"
            onClick={toggleProfile}
          >
            <RxCross2 size={20} />
          </span>
          <div className="flex flex-col justify-center items-center p-2">
            {/* User profile image */}
            <img
              className="w-8 lg:w-14 h-8 lg:h-14 rounded-full"
              src={userProfile[0].image}
              alt="Profile"
            />
            {/* User name */}
            <h2 className="text-lg font-semibold">{userProfile[0].name}</h2>
            {/* User email */}
            <p className="text-sm text-slate-400">{userProfile[0].email}</p>
          </div>
          <div className="tracking-wide leading-7">
            {/* Profile details */}
            <ul className=" py-2 border-t-2">
              <li className="flex justify-between items-center cursor-pointer px-3 hover:bg-slate-500 hover:bg-opacity-10 rounded-md">
                <span className="flex items-center  gap-1">
                  <RxComponentBoolean />
                  Theme
                </span>{" "}
                <RxTriangleRight />
              </li>
              <li className="flex gap-1 items-center cursor-pointer px-3 hover:bg-slate-500 hover:bg-opacity-10 rounded-md">
                <LuBuilding /> Institude Profile
              </li>
            </ul>
            <ul className="border-t-2 pt-2">
              <li className="flex gap-1 items-center cursor-pointer px-3 hover:bg-slate-500 hover:bg-opacity-10 rounded-md">
                <RxMixerVertical /> Settings
              </li>
              <li className="flex justify-between items-center cursor-pointer px-3 hover:bg-slate-500 hover:bg-opacity-10 rounded-md">
                <span className="flex items-center  gap-1">
                  <RxQuestionMarkCircled /> Help and Contact
                </span>{" "}
                <RxTriangleRight />
              </li>
              <li className="flex gap-1 items-center cursor-pointer px-3 hover:bg-slate-500 hover:bg-opacity-10 rounded-md">
                <LuLogOut /> Log out
              </li>
            </ul>
          </div>
        </div>
      )
    );
  };

  // HandleProfile component manages the state of showing/hiding the user profile
  const HandleProfile = () => {
    const [showProfile, setShowProfile] = useState(false);
    const toggleProfile = () => setShowProfile(!showProfile);

    // User profile data
    const userProfile = [
      {
        name: "Priyanshu",
        role: "Admin",
        image: "/assets/priyanshu.png",
        email: "priyanshu123@gmail.com",
      },
    ];

    return (
      <div>
        {/* Render UserProfile component */}
        <UserProfile
          user={userProfile[0]}
          showProfile={showProfile}
          toggleProfile={toggleProfile}
        />
        {/* Render UserProfileDetails component */}
        <UserProfileDetails
          userProfile={userProfile}
          showProfile={showProfile}
          toggleProfile={toggleProfile}
        />
      </div>
    );
  };

  return (
    <div className="flex justify-end items-center cursor-default px-4 py-2 overflow-hidden">
      {/* Profile section */}
      <section className="flex items-center gap-1 md:mt-1 text-gray-400">
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
