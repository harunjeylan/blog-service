import Facebook from "@/components/buttons/Facebook";
import Instagram from "@/components/buttons/Instagram";
import Twitter from "@/components/buttons/Twitter";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-full flex flex-col gap-4">
      <div className="grid grid-auto-sm gap-4">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl font-sans font-bold">Pined posts</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl font-sans font-bold">Recent posts</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl font-sans font-bold">Popular Articles</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-neutral-500" />
              <div className="flex flex-col gap-2 justify-center">
                <h4 className={`text-lg font-sans font-bold Link-underline`}>
                  blog title{" "}
                </h4>
                <small className="font-serif text-sm">jul 23, 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-sans font-bold">Tag Cloud</h3>
        <div className="flex flex-wrap gap-2">
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
          <span className="tag font-sm font-mono">tag 1</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-sans font-bold">Social Profiles</h3>
        <div className="grid grid-auto-sm gap-4">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-sans font-bold">Advertising</h3>
        <div className="flex flex-col gap-2">
          <div className="h-[400px] w-full bg-neutral-500 rounded-md" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
