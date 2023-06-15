"use client";

import Link from "next/link";
import React, { useState } from "react";

const Topbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const topbarlists = [
    {
      title: "(+2519) 22-15-42-38",
      link: undefined,
    },
    {
      title: "ozone technology",
      link: {
        type: "external",
        href: "https://ozonetech.et/",
      },
    },
  ];
  if (isOpened) {
    return (
      <nav className="sticky bg-primary text-light-100 w-full flex justify-between items-center px-8 py-1 md:px-16">
        <div></div>
        <ul className="flex justify-around items-center gap-4">
          {topbarlists.map((topbarlist, index) =>
            topbarlist.link?.type == "external" ? (
              <li key={index} className="text-sm">
                <a href={topbarlist.link?.href} target="_blank">
                  {topbarlist.title}
                </a>
              </li>
            ) : topbarlist.link ? (
              <li key={index} className="text-sm">
                <Link href={topbarlist.link?.href}>{topbarlist.title}</Link>
              </li>
            ) : (
              <li className="text-sm">
                <h4>{topbarlist.title}</h4>
              </li>
            )
          )}
          <li></li>
        </ul>
        <div>
          <button onClick={() => setIsOpened(false)}>X</button>
        </div>
      </nav>
    );
  } else return null;
};

export default Topbar;
