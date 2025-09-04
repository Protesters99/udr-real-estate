import MaxWidthContainer from "../shared/max-width-container";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <header className="bg-teal-900">
      <MaxWidthContainer className="flex md:justify-between items-center text-white py-8">
        <Link href="/">
          <h1 className="font-black text-5xl cursor-pointer">UDR</h1>
        </Link>

        <nav>
          <ul className="flex md:gap-20 text-lg font-medium">
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
