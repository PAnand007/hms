import React from "react";
import InstSidebar from "./InstSidebar";
import InstHeader from "./InstHeader";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gradient-to-tl min-h-screen from-[#33456C]  via-[#339FCF]  to-[#2A2C38]">
      {/* Sidebar */}
      <nav className=" text-white h-full">
        <InstSidebar />
      </nav>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4">
          <InstHeader />
        </header>

        {/* Main body content */}
        <section className="flex-grow p-4 overflow-auto">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
