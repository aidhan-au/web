"use client";

import Link from "next/link";

import ThemeButton from "@/components/micro/theme-btn";
import SearchButton from "@/components/micro/search-btn";
import UserIcon from "@/components/micro/user-icon";

export default function Header() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="w-full bg-neutral-100 text-sm font-[450] text-neutral-600 lg:text-base">
      <div className="container flex items-center justify-between px-2 py-4 mx-auto md:px-3 md:py-5 lg:px-4 lg:py-6 xl:px-5 xl:py-7">
        <h1 className="font-serif font-semibold tracking-tight text-[1.5rem] md:text-[1.625rem] lg:text-[1.75rem] xl:text-[2rem]">
          <Link
            href="/"
            className="text-teal-800 decoration-teal-500 hover:text-teal-700"
          >
            Aidhan
          </Link>
        </h1>
        <nav className="flex justify-around font-sans">
          <ul className="flex items-center tracking-tight">
            {links?.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="p-2 hover:text-teal-600 lg:p-3 2xl:p-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* <div className="flex pl-2 ml-2 border-l border-neutral-300 lg:ml-3 lg:pl-3 xl:ml-4 xl:pl-4">
              <li>
                <ThemeButton />
              </li>
              <li>
                <SearchButton />
              </li>
              <li>
                <UserIcon />
              </li>
            </div> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
