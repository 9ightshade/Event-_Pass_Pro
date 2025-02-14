import Image from "next/image";
import React from "react";
import ticzLogo from "@/public/ticzLogo.png";
import rightArrow from "@/public/right_arrow.png";
import Link from "next/link";

function Header() {
  return (
    <header className="p-4 border rounded-[25px] my-6 border-[#197686] w-[70%] max-w-[1200px] mx-auto ">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={ticzLogo} alt="logo" />
        </Link>
        <ul className="space-x-6 hidden md:flex ">
          <li>
            <Link href="/events" className="hover:text-gray-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/my-tickets" className="hover:text-gray-300">
              My Tickets
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Project
            </Link>
          </li>
        </ul>
        <Link
          href="/my-tickets"
          className="bg-white flex items-center justify-center gap-2 hover:bg-[#0E464F] text-black hover:text-white font-bold py-2 px-4 rounded-[12px] transition-colors duration-600">
          My Tickets <Image src={rightArrow} alt="right_arrow" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
