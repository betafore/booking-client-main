"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-sm">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Link
              href="https://shuttletomoraine.com"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <Image
                src="https://shuttletomoraine.com/wp-content/uploads/2022/12/Stom-Logo.png"
                width={96}
                height={53}
                className="h-auto w-24"
                alt="logo"
              />
            </Link>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  style={{ display: !open ? "block" : "none" }}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  style={{ display: open ? "block" : "none" }}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
              open ? "flex" : "hidden"
            }`}
          >
            <Link
              className="px-2 py-1 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
              href="https://shuttletomoraine.com/"
            >
              Home
            </Link>
            <Link
              className="px-2 py-1 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
              href="https://shuttletomoraine.com/about/"
            >
              About Us
            </Link>
            <Link
              className="px-2 py-1 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
              href="https://shuttletomoraine.com/gallery/"
            >
              Gallery
            </Link>
            <div
              onClick={() => setOpen(false)}
              className="relative"
              x-data="{ open: true }"
            >
              <Link
                className="flex items-center whitespace-nowrap text-base hover:text-gray-900 md:ml-2 px-2 py-1"
                href="/login"
              >
                <FaRegUserCircle className="mr-1 hidden md:block" />

                <span className="text-sm font-semibold">Sign in</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
