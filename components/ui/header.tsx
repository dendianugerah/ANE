"use client";

import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return(
  // <header className="px-4 lg:px-16 h-20 flex items-center border-b">
  //   <Link className="flex items-center justify-center" href="/">
  //     <span className="ml-3 text-xl lg:text-2xl font-bold">CV Abadi Nusantara Entitas</span>
  //   </Link>

  //   <nav className="ml-auto flex gap-4 lg:gap-8">
  //     <Link className="text-base lg:text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="products">
  //       Products
  //     </Link>
  //     <Link className="text-base lg:text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="maintenance">
  //       Hopital Manage
  //     </Link>
  //     <Link className="text-base lg:text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="#contact">
  //       Contact
  //     </Link>
  //   </nav>
  // </header>
  <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2.5">
      <Link className="flex items-center justify-center" href="/">
         <span className="minihape:ml-3 hape:ml-3 sm:ml-3 md:ml-3 lg:ml-6 xl:-ml-6 text-xl lg:text-2xl font-bold">CV Abadi Nusantara Entitas</span>
      </Link>

      <button 
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 17 14"
        >
          <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
      className={`${isOpen ? 'list-item' : 'hidden'} w-full md:block md:w-auto`}
      id="navbar-dropdown"
      >
        <ul className="flex flex-col font-medium py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
          <li>
            <a 
            href="products"
            className="
            text-base font-medium group-hover:w-full transition-all relative 
            minihape:block minihape:text-gray-700 minihape:rounded minihape:hover:bg-gray-100 minihape:dark:text-gray-400 minihape:py-1 minihape:px-3
            hape:block hape:text-gray-700 hape:rounded hape:hover:bg-gray-100 hape:dark:text-gray-400 hape:py-2 hape:px-3 
            md:hover:bg-transparent md:inline lg:text-lg cursor-pointer md:ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-300 md:before:absolute md:before:bg-black md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-300 md:after:absolute md:after:bg-black md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]"
            aria-current="page"
            >
              Products
            </a>
          </li>
          <li>
            <a 
            href="hospitalManage"
            className="
            text-base font-medium group-hover:w-full transition-all relative 
            minihape:block minihape:text-gray-700 minihape:rounded minihape:hover:bg-gray-100 minihape:dark:text-gray-400 minihape:py-1 minihape:px-3
            hape:block hape:text-gray-700 hape:rounded hape:hover:bg-gray-100 hape:dark:text-gray-400 hape:py-2 hape:px-3 
            md:hover:bg-transparent md:inline lg:text-lg cursor-pointer md:ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-300 md:before:absolute md:before:bg-black md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-300 md:after:absolute md:after:bg-black md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]"
            aria-current="page"
            >
              Hopital Manage
            </a>
          </li>
          <li>
            <a 
            href="#contact"
            className="
            text-base font-medium group-hover:w-full transition-all relative 
            minihape:block minihape:text-gray-700 minihape:rounded minihape:hover:bg-gray-100 minihape:dark:text-gray-400 minihape:py-1 minihape:px-3
            hape:block hape:text-gray-700 hape:rounded hape:hover:bg-gray-100 hape:dark:text-gray-400 hape:py-2 hape:px-3 
            md:hover:bg-transparent md:inline lg:text-lg cursor-pointer md:ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-300 md:before:absolute md:before:bg-black md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-300 md:after:absolute md:after:bg-black md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]"
            aria-current="page"
            >
              Contact
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;