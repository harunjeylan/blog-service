import Link from "next/link";
import React from "react";

type BlogCardProps = {
  blog: PostType;
};
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="Card flex">
      <div>{/* <Image  /> */}</div>
      <div className="flex flex-col gap-4 p-6">
        <Link href={``}>
          <h3 className={`h3 font-bold`}>{blog.title}</h3>
        </Link>
        <div>
          <p>{blog.body}</p>
        </div>
        <div>
          <ul className="flex gap-2">
            {blog.tags.map((tag) => (
              <span className="Chip">{tag}</span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
