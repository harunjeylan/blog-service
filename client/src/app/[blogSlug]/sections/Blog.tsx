import React from "react";

type BlogProps = {
  post: PostType;
};
const Blog = ({ post }: BlogProps) => {
  return (
    <div className="flex flex-col gap-10 w-full ">
      <div className="flex flex-col gap-10 w-full   bg-neutral-200 dark:bg-dark-700 p-8">
        <div className="flex flex-col gap-2">
          <h1 className="h2 font-bold">{post.title}</h1>
          <div className="flex gap-2 justify-between items-center">
            <div className="w-fit h-fit my-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-500" />
              <h3>harun jeylan</h3> {" * "}
              <small>jun 26, 2023</small>
            </div>
            <div className="flex gap-2">
              <span className="Chip">react 1</span>
              <span className="Chip">react 2</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span className="Chip">{tag}</span>
          ))}
        </div>
        <div className="">{post.body}</div>
        <div className="Divider" />
        <div className="flex gap-4 items-center justify-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="w-28 h-28 rounded-full bg-gray-500" />
            <div className="text-center">
              <h3 className="h3">Harun Jeylan</h3>
              <p className="p">Web developer</p>
            </div>
            <ul className="w-full flex justify-center items-center gap-2">
              <li>website</li>
              <li>facebook</li>
              <li>linkedin</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h2 className="h2">About the Author</h2>
            <p>
              We are a team working from Chile. We create some Ghost and
              Wordpress themes for differents markets, also, we offer live
              support via our ticket system.
            </p>
            <div>
              <button className="btn-outline btn-outline-primary ">
                View Article
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <h4 className="h3">You might also like</h4>
        <div className="grid grid-auto-sm gap-4">
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`h4 font-bold Link-underline`}>{post.title}</h4>
            <small>jul 23, 2023</small>
          </div>
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`h4 font-bold Link-underline`}>{post.title}</h4>
            <small>jul 23, 2023</small>
          </div>
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`h4 font-bold Link-underline`}>{post.title}</h4>
            <small>jul 23, 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
