"use client";

import Portal from "@/components/Portal";
import ButtonToggleTheme from "@/components/ui/ButtonToggleTheme";
import Navlink from "@/components/ui/Navlink";
import Sidenav from "@/components/ui/Sidenav";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Appbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { theme, toggleLightDark } = useTheme();
  return (
    <>
      <nav className="default-theme w-full flex justify-center items-center px-8 py-4 md:px-16">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center gap-8">
          <div className="">
            <h1>
              <Link href="/" className="w-full h-full">
                BLOG SERVICE
              </Link>
            </h1>
          </div>

          <ul className="hidden md:flex justify-around items-center gap-4">
            <li className="Link-text">
              <Link href={`/`}>blogs</Link>
            </li>
            <li className="Link-text">
              <Link href={`/services`}>services</Link>
            </li>
            <li className="Link-text">
              <Link href={`/contact`}>contact</Link>
            </li>
            <li className="Link-text flex items-center">
              <button
                className="btn-icon w-fit h-fit my-auto"
                onClick={toggleLightDark}
              >
                {theme === "dark" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </li>
          </ul>
          <div className="flex md:hidden">
            <button
              data-test-id="open-sizenav-button"
              className="btn-icon w-fit h-fit my-auto"
              onClick={() => setIsOpened(true)}
            >
              <AiOutlineMenuUnfold />
            </button>
          </div>
        </div>
      </nav>
      <Portal>
        <Sidenav isOpened={isOpened} setIsOpened={setIsOpened}>
          <ul className="flex flex-col justify-around items-start m-2 mt-8">
            <Navlink className="border-b border-neutral-400 dark:border-dark-400 border-t">
              services
            </Navlink>
            <Navlink className="border-b border-neutral-400 dark:border-dark-400">
              blog
            </Navlink>
            <Navlink className="border-b border-neutral-400 dark:border-dark-400">
              contact
            </Navlink>
            <Navlink className="border-b border-neutral-400 dark:border-dark-400">
              <span>Theme</span>
              <button className="btn-icon" onClick={toggleLightDark}>
                {theme === "dark" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </Navlink>
          </ul>
        </Sidenav>
      </Portal>
    </>
  );
};

export default Appbar;
