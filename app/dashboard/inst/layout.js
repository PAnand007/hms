import React from "react";
import InstSidebar from "./InstSidebar";
import InstHeader from "./InstHeader";

const Layout = ({ children }) => {
  return (
    <div className="flex max-h-screen bg-[#F6F8FB]">
      {/* Sidebar */}
      <nav>
        <InstSidebar />
      </nav>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header>
          <InstHeader />
        </header>

        {/* Main body content */}
        <section className="flex-grow p-4 h-screen bg-[#fff] rounded-xl overflow-hidden">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
