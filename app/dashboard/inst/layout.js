import React from 'react';


const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <nav className="bg-gray-800 text-white w-64 h-full hidden md:block" > sidebar </nav>

            {/* Main content area */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <section className="bg-white shadow-md p-4"> header </section>

                {/* Main body content */}
                <div className="flex-grow p-4 overflow-auto">
                    {children}
                </div>

                {/* Footer */}
                <footer className="bg-white shadow-md p-2" >footer</footer>
            </main>
        </div>
    );
};

export default Layout;
