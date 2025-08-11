 
import { useState } from "react";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        aria-label="Open menu"
        className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 w-8 h-8 items-center justify-center cursor-pointer"
      >
        <span
          className={`h-0.5 w-6 bg-[#FFC32B] rounded transition-transform ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-[#FFC32B] rounded transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-[#FFC32B] rounded transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Full-Screen Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-black text-white z-40 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* <h2 className="text-lg font-bold text-[#FFC32B]">Menu</h2> */}
          <div
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 mt-5"
            onClick={() => alert("Sign Up")}
          >
            Sign Up for NFTC
          </div>
          <div
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700"
            onClick={() => alert("Download App")}
          >
            Download the App
          </div>
          <div
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700"
            onClick={() => alert("About DOACH")}
          >
            About DOACH
          </div>
          <div
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700"
            onClick={() => alert("About NFTC")}
          >
            About NFTC
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
