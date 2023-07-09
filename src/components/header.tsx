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
    <header className="w-full tracking-tighter lg:tracking-tight">
      <div
        className="container flex items-center justify-between mx-auto"
        un-p="x-2 y-6 lg:x-3 lg:y-9"
      >
        <h1 un-text="[1.75em] lg:[2em]" un-font="serif semibold">
          <Link href="/" className="a-primary">
            Aidhan
          </Link>
        </h1>
        <nav className="flex justify-around" un-font="sans medium">
          <ul className="flex items-center">
            {links?.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="p-2 lg:p-4 a-primary">
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
