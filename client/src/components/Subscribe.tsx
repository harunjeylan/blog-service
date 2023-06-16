"use client";

import { useRef } from "react";

const Subscribe = () => {
  const inputRef = useRef<any>();
  return (
    <div className="max-w-lg mx-auto flex justify-between items-center gap-4">
      <div className="w-full flex flex-col gap-2 items-center text-center justify-center">
        <h2 className="text-[20px] font-black">Subscribe To Our Newsletter</h2>
        <h3>and receive $20 coupon for your first order when you checkout</h3>
        <div className="flex gap-2 items-center bg-primary p-4">
          <input
            placeholder="Enter email"
            ref={inputRef}
            className="bg-transparent focus:outline-none"
          />
          <span className="h-6 w-[2px] bg-gray-500" />
          <div className="cursor-pointer">
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
