"use client";

import Link from "next/link";

import ThemeButton from "@/components/micro/theme-btn";
import SearchButton from "@/components/micro/search-btn";
import UserIcon from "@/components/micro/user-icon";

export default function Header() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="w-full bg-neutral-100 text-sm font-[450] text-neutral-600 lg:text-base">
      <div className="flex items-center justify-between p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6">
        <h1 className="font-serif text-2xl font-semibold tracking-tight md:text-[1.75rem] lg:text-[2rem]">
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
            <div className="ml-2 flex border-l border-neutral-300 pl-2 lg:ml-3 lg:pl-3 xl:ml-4 xl:pl-4">
              {/* <li>
                <ThemeButton />
              </li> */}
              <li>
                <SearchButton />
              </li>
              <li>
                <UserIcon />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
