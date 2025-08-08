 

import React, { useState } from "react";  
import HomeHeader from "../components/HomePage/HomeHeader";
import HomeFooter from "../components/HomePage/HomeFooter";
import AboutUs from "../components/AboutUs/AboutUs";

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    // <PrivateRoute>

    <div> 
        <HomeHeader />
        <AboutUs />
        <HomeFooter />
    </div>
    // </PrivateRoute>
  );
}
