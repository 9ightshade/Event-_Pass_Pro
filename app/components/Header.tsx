import Image from "next/image";
import React from "react";
import ticzLogo from "@/public/ticzLogo.png";
import rightArrow from "@/public/right_arrow.png";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Image src={ticzLogo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/my-tickets">My Tickets</Link>
          </li>
          <li>
            <Link href="/about">About Project</Link>
          </li>
          <li>
            <Link href="/my-tickets">
              My Tickets <Image src={rightArrow} alt="right_arrow" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
