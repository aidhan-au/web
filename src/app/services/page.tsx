"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero";

export default function Index() {
  let background = "bg-red-500";
  return (
    <main>
      <Hero>
        <h1 un-text="3xl md:4xl lg:5xl" un-font="serif semibold">
          <div className="leading-snug">Web and digital services</div>
          <div className="leading-snug">for the here and now.</div>
        </h1>

        <div>
          <ul
            className="flex flex-col gap-2 md:gap-3 lg:gap-4"
            un-text="n right xl md:2xl lg:3xl"
          >
            <li>
              <h2
                un-p="md:y-1 lg:y-2"
                un-font="semibold serif"
                onMouseOver={() => (background = "bg-blue-500")}
              >
                <Link href="/services/design" className="a-secondary">
                  Graphic design
                </Link>
              </h2>
            </li>
            <li>
              <h2 un-p="md:y-1 lg:y-2" un-font="semibold serif">
                <Link href="/services/development" className="a-secondary">
                  Web development
                </Link>
              </h2>
            </li>
            <li>
              <h2 un-p="md:y-1 lg:y-2" un-font="semibold serif">
                <Link href="/services/infrastructure" className="a-secondary">
                  Infrastructure
                </Link>
              </h2>
            </li>
          </ul>
        </div>
      </Hero>
      {background}
    </main>
  );
}
