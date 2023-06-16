import Link from "next/link";
import React from "react";

type BlogCardProps = {
  blog: PostType;
};
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="Card flex flex-col md:flex-row ">
      <div className="flex h-full md:h-full w-full md:w-1/3">
        <div className="w-full h-[280px] bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-4 p-4 w-full md:w-2/3">
        <div className="w-full flex justify-between ">
          <div>
            <span className="tag text-sm">Category</span>
          </div>
          <div className="flex justify-between">{/* reaction */}</div>
        </div>
        <Link href={`/${blog.id}`}>
          <h4 className={`font-bold Link-text text-lg font-sans`}>
            {blog.title}
          </h4>
        </Link>
        <div className="flex flex-col gap-2">
          <p className="text-ellipsis line-clamp-3 font-serif">{blog.body}</p>

          <div className="flex flex-col md:flex-row items-start gap-2 justify-between md:items-center">
            <div className="w-fit h-fit my-4 flex items-center justify-between gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-500" />
              <h3>harun jeylan</h3> {" * "}
              <small className="text-sm font-mono">jun 26, 2023</small>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="tag text-sm">react 1</div>
              <div className="tag text-sm">react 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
