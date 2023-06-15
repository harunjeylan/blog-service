"use client";

import Portal from "@/components/Portal";
import ButtonToggleTheme from "@/components/ui/ButtonToggleTheme";
import Navlink from "@/components/ui/Navlink";
import Sidenav from "@/components/ui/Sidenav";
import React, { useState } from "react";

const Appbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <nav className="sticky default-theme w-full flex justify-center items-center px-8 py-1 md:py-2 md:px-16">
        <div className="w-full max-w-6xl max-auto flex justify-between items-center gap-8">
          <div className="">
            <h1>BLOG SERVICE</h1>
          </div>

          <ul className="hidden md:flex justify-around items-center gap-4">
            <li>services</li>
            <li>blog</li>
            <li>contact</li>
            <li>
              <ButtonToggleTheme id="button-1" />
            </li>
          </ul>
          <div className="flex md:hidden">
            <button
              data-test-id="open-sizenav-button"
              className="m-1 p-1 bg-slate-400 dark:bg-slate-800"
              onClick={() => setIsOpened(true)}
            >
              {">>>"}
            </button>
          </div>
        </div>
      </nav>
      <Portal>
        <Sidenav isOpened={isOpened} setIsOpened={setIsOpened}>
          <ul className="flex flex-col justify-around items-start gap-4 mx-4 mt-8 ">
            <Navlink>services</Navlink>
            <Navlink>blog</Navlink>
            <Navlink>contact</Navlink>
            <li>
              <ButtonToggleTheme id="button-2" />
            </li>
          </ul>
        </Sidenav>
      </Portal>
    </>
  );
};

export default Appbar;
