import BlogCard from "@/components/cards/BlogCard";
import { getPosts } from "@/libs/server/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogList = async () => {
  const { posts }: { posts: PostType[] } = await getPosts();

  return (
    <section className="Section">
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <BlogCard blog={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
