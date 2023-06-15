import BlogCard from "@/components/cards/BlogCard";
import { getPosts } from "@/libs/server/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "../Sidebar";

const BlogList = async () => {
  const { posts }: { posts: PostType[] } = await getPosts();

  return (
    <div className="flex flex-col gap-10 w-full ">
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <BlogCard blog={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
