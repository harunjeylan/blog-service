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
        } relative max-w-[80%] h-screen bg-background dark:bg-dark-600 ease-in-out duration-500 overflow-x-hidden`}
      >
        <div className="w-full flex justify-end">
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
