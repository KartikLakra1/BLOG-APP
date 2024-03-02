import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <div className="min-h-[80vh]">
                {children}
            </div>

            <Footer />
        </>

    )
};

export default Layout;
