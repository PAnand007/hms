import React from "react";
import InstSidebar from "./InstSidebar";
import InstHeader from "./InstHeader";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#F6F8FB]">
      {/* Sidebar */}
      <nav className=" text-white h-full">
        <InstSidebar />
      </nav>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header>
          <InstHeader />
        </header>

        {/* Main body content */}
        <section className="flex-grow p-4 min-h-screen bg-[#fff] rounded-lg overflow-auto">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
