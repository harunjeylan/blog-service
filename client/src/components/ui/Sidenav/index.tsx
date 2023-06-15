"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

type SidenavProps = {
  children: ReactNode | ReactNode[];
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidenav = ({ children, isOpened, setIsOpened }: SidenavProps) => {
  return (
    <div className={`fixed top-0 left-0  h-screen  ease-in-out duration-500`}>
      <span
        data-test-id="sizenav-cover"
        onClick={() => setIsOpened(false)}
        className={`${
          isOpened ? "opacity-100 flex" : "opacity-0 hidden"
        } fixed top-0 left-0 h-screen w-screen bg-black/50 ease-in-out duration-500`}
      />
      <aside
        className={`${
          isOpened ? "w-[400px]" : "w-0"
        } relative max-w-[80%] h-screen bg-neutral-200 dark:bg-dark-800 ease-in-out duration-500 overflow-x-hidden border-r border-r-neutral-300 dark:border-dark-300`}
      >
        <div className="w-full flex justify-end bg-neutral-300 dark:bg-dark-700">
          <button
            data-test-id="close-sizenav-button"
            className="m-1 p-1"
            onClick={() => setIsOpened(false)}
          >
            {"<<<"}
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
};

export default Sidenav;
