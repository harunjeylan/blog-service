import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Facebook = () => {
  return (
    <button className="btn-contained btn-contained-blue flex items-center justify-between text-xl gap-16 py-4 px-6 text-white">
      <div className="flex flex-col items-start">
        <span className="text-md">Facebook</span>
        <small className="text-xm font-mono">flow me!</small>
      </div>
      <FaFacebookF size={36} />
    </button>
  );
};

export default Facebook;
