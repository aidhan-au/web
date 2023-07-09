"use client";

import Icon from "@/components/micro/icon";
// import { useState } from "react";

export default function SearchButton() {
  // Toggle a search popover/modal?

  //   const [isDark, setDark] = useState(false);

  //   function toggleTheme(e: React.MouseEvent<HTMLAnchorElement>) {
  //     e.preventDefault();
  //     setDark(!isDark);

  //     if (isDark) {
  //       document.body.classList.add("dark");
  //       document.body.classList.remove("light");
  //     } else {
  //       document.body.classList.remove("dark");
  //       document.body.classList.add("light");
  //     }
  //   }

  return (
    <a href="#" className="inline-block px-2 lg:px-3 xl:px-4">
      <Icon className="h-8 pt-2" label="Search">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </Icon>
    </a>
  );
}
