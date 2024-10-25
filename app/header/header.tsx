"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between font-semibold w-full py-6 px-6 text-[20px] text-white bg-zinc-900 bg-opacity-80">
      <button
        title="Menu"
        onClick={onClickHandler}
        className="md:hidden lg:hidden block"
      >
        {isOpen ? (
          <FaTimes size={25} className="ml-2" />
        ) : (
          <FaBars size={25} className="ml-2" />
        )}
      </button>

      <div className="flex-grow-0 ml-4">
        <h2 className="text-2xl text-pink-500">
          Kashaf.
        </h2>
      </div>

      <nav className="hidden md:flex lg:flex flex-grow justify-end gap-x-4">
        <Link href="/" className="hover:underline hover:text-pink-600">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:text-pink-600">
          About
        </Link>
        <Link href="/contact" className="hover:underline hover:text-pink-600">
          Contact
        </Link>
      </nav>

      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full bg-zinc-900 p-6 rounded-lg shadow-lg z-40">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/" className="hover:underline hover:text-pink-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-pink-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-pink-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}






































