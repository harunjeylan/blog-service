import Comments from "@/components/Comments";
import React from "react";

type BlogProps = {
  post: PostType;
};
const Blog = ({ post }: BlogProps) => {
  return (
    <div className="flex flex-col gap-10 w-full ">
      <div className="flex flex-col gap-10 w-full   bg-neutral-200 dark:bg-dark-700 p-8">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-start ">
            <span className="tag text-sm">Category</span>
          </div>
          <h1 className={`font-bold Link-text text-4xl font-sans`}>
            {post.title}
          </h1>
          <div className="flex gap-2 justify-between items-center">
            <div className="w-fit h-fit my-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-500" />
              <h3>harun jeylan</h3> {" * "}
              <small className="text-sm font-mono">jun 26, 2023</small>
            </div>
            <div className="flex gap-2">{/* reaction */}</div>
          </div>
        </div>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span className="tag text-sm font-mono">{tag}</span>
          ))}
        </div>
        <div className="font-serif">{post.body}</div>
        <div className="Divider" />
        <Comments />
        <div className="Divider" />
        <div className="flex gap-4 items-center justify-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="w-28 h-28 rounded-full bg-gray-500" />
            <div className="text-center">
              <h3 className="font-bold text-xl font-sans">Harun Jeylan</h3>
              <p className="font-serif text-sm">Web developer</p>
            </div>
            <ul className="w-full flex justify-center items-center gap-2">
              <li className="">website</li>
              <li>facebook</li>
              <li>linkedin</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="font-bold text-xl font-sans">About the Author</h2>
            <p className="font-serif">
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
        <h4 className="font-bold text-2xl font-sans">You might also like</h4>
        <div className="grid grid-auto-sm gap-4">
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`font-bold text-lg font-sans`}>{post.title}</h4>
            <small className="text-sm font-serif">jul 23, 2023</small>
          </div>
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`font-bold text-lg font-sans`}>{post.title}</h4>
            <small className="text-sm font-serif">jul 23, 2023</small>
          </div>
          <div>
            <div className="w-full h-52 bg-neutral-500" />
            <h4 className={`font-bold text-lg font-sans`}>{post.title}</h4>
            <small className="text-sm font-serif">jul 23, 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
