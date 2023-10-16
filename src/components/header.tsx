"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const pagesWithoutBanner = ["/attorney-profiles", "/links", "/terms", "/contact"]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const hasBackground = pagesWithoutBanner.includes(pathname);
  const isDesktop = !!width && width >= 1024;
  const isServices = pathname === '/trademarks' || 
    pathname === '/copyrights' || 
    pathname === '/trade-secrets';

  return (
    <header className={`sticky top-0 w-full bg-primary border-b border-secondary lg:bg-transparent`}>
      <nav className={`flex ${open ? "flex-col" : "flex-row items-center"} p-4 lg:px-16 justify-between`}>
        {/* Logo */}
        <div id="logo">
          <Link href="/" title="Home" aria-label='Home'>
            <img src="/images/McCarthy-Godlewski_Lawfirm_Logo.png" width="350px" height="100px" alt="McCarthy Godlewski LLC Law Firm Logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          id="menu-button"
          className={`h-8 w-8 cursor-pointer block text-white ml-4 ${open ? "self-end -mt-[66px]" : ""} lg:hidden`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        {/* Menu */}
        <div id="menu" className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>

          <ul className="flex flex-col p-4 w-full lg:w-auto lg:flex-row lg:justify-between lg:items-center">
            <li className="p-4 border-b border-sky lg:border-0">
              <Link href="/" className={`${pathname === "/" ? "text-secondary" : "text-white"} hover:text-sky`}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-sky lg:border-0">
              <Link href="/attorney-profiles" className={`${pathname === "/attorney-profiles" ? "text-secondary" : "text-white"} hover:text-sky`}>
                Attorney Profiles
              </Link>
            </li>
            <li 
              className="p-4 pr-0 border-b border-sky lg:border-0 lg:pr-4"
              onMouseEnter={() => {
                if (isDesktop) setSubMenuOpen(true)
              }}
              onMouseLeave={()=> setSubMenuOpen(false)}
            >
              <a href="#" className={`${isServices ? "text-secondary" : "text-white"} hover:text-sky`}>
                Services
              </a>
              <ul 
                id="sub-menu" 
                className={`
                  ${open || subMenuOpen ? "block" : "hidden"} 
                  ${subMenuOpen ? "absolute bg-secondary pr-16 pb-4 border-t-[54px] border-primary" : "relative"}
                `}
              >
                <li className={`p-4 pr-0 border-b border-t ${subMenuOpen ? "mt-0" : "mt-4"} border-sky lg:border-0`}>
                  <Link href="/trademarks" className={`${pathname === "/trademarks" && !subMenuOpen ? "text-secondary" : "text-white"} ${subMenuOpen ? "hover:text-primary" : "hover:text-sky"}`}>
                    Trademarks
                  </Link>
                </li>
                <li className="p-4 pr-0 border-b border-sky lg:border-0">
                  <Link href="/copyrights" className={`${pathname === "/copyrights" && !subMenuOpen ? "text-secondary" : "text-white"} ${subMenuOpen ? "hover:text-primary" : "hover:text-sky"}`}>
                    Copyrights
                  </Link>
                </li>
                <li className="p-4 pr-0 pb-0">
                  <Link href="/trade-secrets" className={`${pathname === "/trade-secrets" && !subMenuOpen ? "text-secondary" : "text-white"} ${subMenuOpen ? "hover:text-primary" : "hover:text-sky"}`}>
                    Trade Secrets
                  </Link>
                </li>
              </ul>
            </li>
            <li className="p-4 border-b border-sky lg:border-0">
              <Link href="/links" className={`${pathname === "/links" ? "text-secondary" : "text-white"} hover:text-sky`}>
                Links
              </Link>
            </li>
            <li className="p-4 pb-0 lg:pb-4">
              <Link href="/contact" className={`${pathname === "/contact" ? "text-secondary" : "text-white"} hover:text-sky`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
 export default Navbar