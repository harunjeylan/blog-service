import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const Twitter = () => {
  return (
    <button className="btn-contained btn-contained-sky flex items-center justify-between text-xl gap-16 py-4 px-6  text-white">
      <div className="flex flex-col items-start">
        <span className="text-md">Twitter</span>
        <small className="text-xm font-mono">flow me!</small>
      </div>
      <AiOutlineTwitter size={36} />
    </button>
  );
};

export default Twitter;
