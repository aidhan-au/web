"use client";

import Icon from "@/components/micro/icon";
import { useState } from "react";

export default function ThemeButton() {
  const [isDark, setDark] = useState(false);

  function toggleTheme(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setDark(!isDark);

    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }

  return (
    <a
      href="#"
      className="inline-block px-2 lg:px-3 xl:px-4"
      onClick={toggleTheme}
    >
      {!isDark && (
        <Icon className="h-8 pt-2" label="Switch to dark theme">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
        </Icon>
      )}

      {isDark && (
        <Icon className="h-8 pt-2" label="Switch to light theme">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </Icon>
      )}
    </a>
  );
}
