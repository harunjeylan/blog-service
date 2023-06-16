import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Instagram = () => {
  return (
    <button className="btn-contained btn-contained-pink flex items-center justify-between text-xl gap-16 py-4 px-6  text-white">
      <div className="flex flex-col items-start">
        <span className="text-md">Instagram</span>
        <small className="text-xm font-mono">flow me!</small>
      </div>
      <AiFillInstagram size={36} />
    </button>
  );
};

export default Instagram;
