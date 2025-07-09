"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-main p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-dark text-2xl font-adam-light uppercase flex items-center">
          <Image
            src="/logo-transparent.png"
            alt="Dhruvtara Farms Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          DHRUVTARA FARMS
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-dark focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <Link href="/gallery" className="text-dark hover:text-gray-500">
            Gallery
          </Link>
          <Link href="/testimonials" className="text-dark hover:text-gray-500">
            Testimonials
          </Link>
          <Link href="/contact" className="text-dark hover:text-gray-500">
            Contact Us
          </Link>
          <Link href="/about" className="text-dark hover:text-gray-500">
            About Us
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-main pt-2 pb-4 space-y-2">
          <Link href="/gallery" className="block text-dark hover:text-gray-500 px-4 py-2">
            Gallery
          </Link>
          <Link href="/testimonials" className="block text-dark hover:text-gray-500 px-4 py-2">
            Testimonials
          </Link>
          <Link href="/contact" className="block text-dark hover:text-gray-500 px-4 py-2">
            Contact Us
          </Link>
          <Link href="/about" className="block text-dark hover:text-gray-500 px-4 py-2">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}