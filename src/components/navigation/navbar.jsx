import MaxWidthContainer from "../shared/max-width-container";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-teal-900">
      <MaxWidthContainer className="flex md:justify-between items-center text-white py-8">
        <Link href="/">
          <h1 className="font-black text-5xl cursor-pointer">UDR</h1>
        </Link>

        <nav>
          <ul className="flex md:gap-20 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-amber-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </MaxWidthContainer>
    </header>
  );
}
