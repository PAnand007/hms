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
import { GiNinjaHead } from "react-icons/gi";
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
      path: "",
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

  // Get the current pathname
  const pathname = usePathname();

  // Render sidebar items list
  const SidebarItemsList = () => {
    return (
      <ul
        className={`md:pb-4 flex flex-col h-full pt-20 ${
          toggle ? " gap-6" : " gap-4"
        } `}
      >
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`${!toggle && "mb-4"} ${
              pathname === `/dashboard/inst${item.path}`
                ? "text-[#2656C9] font-bold scale-110"
                : "text-[#585757] scale-95"
            } hover:text-[#2656C9] font-semibold`}
          >
            {/* Sidebar item link */}
            <Link
              className="flex justify-items-start gap-3 items-center capitalize group relative"
              href={`/dashboard/inst${item.path}`}
            >
              {pathname === `/dashboard/inst${item.path}` && (
                <div
                  className={`${
                    toggle && "w-3.5"
                  } h-8 border-r-8 border-[#2656C9] rounded-3xl absolute left-0 top-1/2 -translate-y-1/2`}
                ></div>
              )}

              {/* Sidebar item icon */}
              <span className="pl-5 md:pl-7">{item.icon}</span>
              {/* Sidebar item name */}
              {toggle && <span>{item.name}</span>}
              {!toggle && (
                <span
                  className="absolute -top-2 left-[100%] translate-x-[15%]  
                              z-20 origin-left scale-0 px-3 rounded-lg border 
                              border-gray-300 bg-[#585757] py-2 text-sm font-bold
                              shadow-md transition-all duration-300 ease-in-out text-[#ffffff]
                              group-hover:scale-100"
                >
                  {item.name}
                  <div className="bg-inherit rotate-45 p-1.5 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
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
      <div
        className={`${
          !toggle ? "w-[90%] mx-1" : "w-[80%] ml-4"
        } group border-t-2 border-slate-400 mb-8 hidden md:block
       `}
      >
        <Link
          className={`flex group relative capitalize pt-6 font-semibold ${
            pathname === `/dashboard/inst/settings`
              ? "text-[#2656C9] font-bold scale-110"
              : "text-[#585757]"
          } hover:text-[#2656C9]`}
          href="/dashboard/inst/settings"
        >
          {/* Settings icon */}
          <span
            className={`mr-4 ${
              !toggle && "mx-auto"
            } group-focus:scale-110 transition-all duration-150 ease-in-out`}
          >
            <IoSettingsOutline size={24} />
          </span>
          {/* Settings name */}
          {toggle && <span>settings</span>}
          {!toggle && (
            <span
              className="absolute left-[100%] translate-x-[5%] -translate-y-2
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-black py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out text-white
                        group-hover:scale-100"
            >
              Settings
              <div className="bg-inherit rotate-45 p-1.5 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
            </span>
          )}
        </Link>
      </div>
    );
  };

  return (
    <div
      // Sidebar container styles
      className={`fixed md:relative z-40 h-full md:h-screen flex flex-col justify-between bg-[#F6F8FB] ${
        toggle ? "w-44" : "w-16"
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={`absolute top-3 md:top-6 left-4 md:left-8
                    rounded-full bg-white hover:bg-slate-200 text-black
                    w-6 h-6 shadow-md
                    flex justify-center items-center`}
      >
        {toggle ? <FaAngleLeft /> : <FaAngleRight />}
      </button>

      <Link
        className={`absolute top-3 md:top-5 left-16 md:left-28 text-black flex items-center gap-2 scale-150  `}
        href={""}
      >
        <GiNinjaHead size={20} />
        <span className="text-lg hidden md:block">Hostelbees</span>
      </Link>

      {/* Sidebar items list */}
      <SidebarItemsList />

      {/* Settings link */}
      <HandleSettings />
    </div>
  );
};

export default InstSidebar;
