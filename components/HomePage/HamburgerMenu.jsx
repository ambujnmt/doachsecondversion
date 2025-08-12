import { useState } from "react";
import { Link } from "@heroui/react";

export default function YellowCircleMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Yellow Circle Button */}
      {!menuOpen && (
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="fixed top-6 right-6 z-50 w-7 h-7 rounded-full bg-[#FFC32B] shadow-lg flex items-center justify-center cursor-pointer"
        />
      )}

      {/* Full-Screen Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-black text-white z-40 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-white text-2xl font-bold"
        >
          ✕
        </button>

        <div className="space-y-6">
          <Link
            href="/login"
            className="block px-3 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 mt-5 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Login
          </Link>
          <Link
            href="/signUp"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Create Account
          </Link>
          <Link
            href="/aboutUs"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            About Doach
          </Link>
          <Link
            href="/community"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Community
          </Link>
          <Link
            href="/event"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Events / Contests / Awards
          </Link>
          <Link
            href="contactUs"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Contact / Help
          </Link>
          <Link
            href="privacyPolicy"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Privacy & Terms
          </Link>
          <Link
            href="#"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Download App
          </Link>
          <Link
            href="#"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Sessions
          </Link>
          <Link
            href="#"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            MyDoach
          </Link>
          <Link
            href="#"
            className="block px-3 mt-0 py-3 rounded-md hover:bg-[#FFC32B]/10 cursor-pointer text-sm border-b !border-gray-700 text-left text-white hover:!text-[#FFC32B] leading-[15px]"
          >
            Onboarding
          </Link>
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
