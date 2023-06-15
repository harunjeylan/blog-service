import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h3 className="h3">Recent posts</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Popular Articles</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-neutral-500" />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className={`h4 font-bold Link-underline`}>blog title </h4>
              <small>jul 23, 2023</small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Tag Cloud</h3>
        <div className="flex flex-wrap gap-2">
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
          <span className="Chip">tag 1</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Social Profiles</h3>
        <div className="flex flex-col gap-2">
          <button className="btn-contained btn-contained-primary">
            Twitter
          </button>
          <button className="btn-contained btn-contained-primary">
            Facebook
          </button>
          <button className="btn-contained btn-contained-primary">
            Instagram
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Advertising</h3>
        <div className="flex flex-col gap-2">
          <div className="h-[400px] w-full bg-neutral-500 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
