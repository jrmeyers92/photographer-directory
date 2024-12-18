"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 text-2xl font-bold">
          <span>📸</span>
          <span>STL Photographers</span>
        </a>

        {/* Desktop Menu */}
        {/* <ul className="hidden space-x-8 md:flex">
          <li>
            {" "}
            <a href="/" className="transition hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a
              href="/photographers"
              className="transition hover:text-yellow-400"
            >
              Photographers
            </a>
          </li>
          <li>
            {" "}
            <a href="/categories" className="transition hover:text-yellow-400">
              Categories
            </a>
          </li>
          <li>
            {" "}
            <a href="/contact" className="transition hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul> */}

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:text-yellow-400 focus:outline-none md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-800 md:hidden">
          <a
            href="/"
            className="block border-b border-gray-700 px-6 py-2 transition hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/photographers"
            className="block border-b border-gray-700 px-6 py-2 transition hover:bg-gray-700"
          >
            Photographers
          </a>
          <a
            href="/categories"
            className="block border-b border-gray-700 px-6 py-2 transition hover:bg-gray-700"
          >
            Categories
          </a>
          <a
            href="/contact"
            className="block px-6 py-2 transition hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
