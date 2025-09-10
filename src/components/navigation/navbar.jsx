"use client";
import MaxWidthContainer from "../shared/max-width-container";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-teal-900">
      <MaxWidthContainer className="flex justify-between items-center text-white py-8 md:px-0 px-4">
        <Link href="/">
          <h1 className="font-black text-5xl cursor-pointer">UDR</h1>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="md:hidden"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          {showMenu ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>



        <nav
          className={cn(
            "md:block",
            showMenu ? "absolute top-28 left-0 w-full h-screen bg-amber-700 z-50" : "hidden md:block"
          )}
        >
          <ul
            className={cn(
              "flex md:gap-20 md:flex-row flex-col gap-24 py-10 md:py-0 text-center text-lg font-medium",
              
            )}
          >
            {NAV_LINKS.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/${link.href}`}
                    className="hover:text-amber-700 font-bold"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </MaxWidthContainer>
    </header>
  );
}
