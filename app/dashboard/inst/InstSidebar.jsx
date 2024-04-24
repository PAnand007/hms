"use client";

// Importing necessary modules
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Importing necessary icons
import {
  FaVectorSquare,
  FaAccusoft,
  FaBuilding,
  FaAssistiveListeningSystems,
  FaUserGraduate,
  FaFacebookMessenger,
  FaChalkboardTeacher,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

// Define the InstSidebar component
const InstSidebar = () => {
  // State for toggling the sidebar
  const [toggle, setToggle] = useState(false);

  // Function to handle sidebar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Sidebar items data
  const sidebarItems = [
    {
      name: "overview",
      path: "/",
      icon: <FaVectorSquare />,
    },
    {
      name: "finance",
      path: "/finance",
      icon: <FaAccusoft />,
    },
    {
      name: "hostel",
      path: "/hostels",
      icon: <FaBuilding />,
    },
    {
      name: "warden",
      path: "/wardens",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "students",
      path: "/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "message",
      path: "/message",
      icon: <FaFacebookMessenger />,
    },
    {
      name: "notice",
      path: "/notice",
      icon: <FaAssistiveListeningSystems />,
    },
  ];

  // Render sidebar items list
  const SidebarItemsList = () => {
    // Get the current pathname
    const pathname = usePathname();
    console.log(pathname);
    return (
      <ul
        className={`pb-4 ${
          toggle ? "pt-10 md:pt-28" : "pt-32 hidden md:block"
        } `}
      >
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`p-3 ${
              !toggle && "mb-4"
            } w-12 group hover:font-semibold ${
              pathname === `/dashboard/inst/${item.path}`
                ? "text-white"
                : "text-[#C4C4C4]"
            } hover:text-white`}
          >
            {/* Sidebar item link */}
            <Link
              className="flex items-center capitalize group relative"
              href={`/dashboard/inst/${item.path}`}
            >
              {/* Sidebar item icon */}
              <span className="mr-4 text-lg group-hover:scale-125 transition-all duration-300 ease-in-out">
                {item.icon}
              </span>
              {/* Sidebar item name */}
              {!toggle && (
                <span
                  className="absolute -top-2 left-[100%] translate-x-[15%]  
                              z-20 origin-left scale-0 px-3 rounded-lg border 
                              border-gray-300 bg-white py-2 text-sm font-bold
                              shadow-md transition-all duration-300 ease-in-out text-black
                              group-hover:scale-100"
                >
                  {item.name}
                  <div className="bg-inherit rotate-45 p-1.5 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
                </span>
              )}
              {toggle && (
                <span>
                  {item.name}
                  <div class=" hidden lg:block bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  // Render settings link
  const HandleSettings = () => {
    return (
      <div className={`${!toggle && "hidden md:block"}`}>
        <Link
          className="flex group relative capitalize border-t-2 border-slate-400 pt-6 pb-8 text-lg mt-4 hover:font-semibold"
          href="/dashboard/inst/settings"
        >
          {/* Settings icon */}
          <span className="mr-4 pl-2 hover:scale-110 transition-all duration-150 ease-in-out">
            <IoSettingsOutline size={24} />
          </span>
          {/* Settings name */}
          {!toggle && (
            <span
              className="absolute left-[100%] translate-x-[5%] -translate-y-2
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out text-black
                        group-hover:scale-100"
            >
              Settings
              <div className="bg-inherit rotate-45 p-1.5 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
            </span>
          )}
          {toggle && <span>settings</span>}
        </Link>
      </div>
    );
  };

  return (
    <div
      // Sidebar container styles
      className={`fixed md:relative md:z-0 z-40 flex ${
        !toggle && "-translate-x-8 md:translate-x-0"
      } flex-col justify-evenly md:justify-between rounded-tr-xl border-r-2 border-gray-400
                  transition-all duration-300 ease-in-out
                  px-8 bg-white bg-opacity-5 min-h-screen`}
    >
      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={`absolute top-20 
                    ${toggle ? "left-36 md:left-48" : "left-9 md:left-20 "} 
                    rounded-full bg-white hover:bg-slate-200 text-black
                    w-6 h-6 shadow-md
                    flex justify-center items-center`}
      >
        {toggle ? <FaAngleLeft /> : <FaAngleRight />}
      </button>

      {/* Sidebar items list */}
      <SidebarItemsList />

      {/* Plan details section */}
      {toggle && (
        <section className="bg-black bg-opacity-25 text-center md:text-xl p-2 flex justify-center items-center md:p-10 w-28 h-28 md:w-40 md:h-40 rounded-xl cursor-default">
          <p>Plan details</p>
        </section>
      )}

      {/* Settings link */}
      <HandleSettings />
    </div>
  );
};

export default InstSidebar;
