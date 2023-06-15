import React from "react";
import { getPost, getPosts } from "@/libs/server/post";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "../sections/Sidebar";
import Blog from "./sections/Blog";

type BlogPage = {
  params: { blogSlug: string };
};
const BlogPage = async ({ params }: BlogPage) => {
  const post: PostType = await getPost(params.blogSlug);
  return (
    <section className="xl:container my-2 px-4 mx-auto">
      <div className="w-full flex flex-col lg:flex-row gap-8 ">
        <div className="lg:max-w-[70%]">
          <Blog post={post} />
        </div>
        <div className="lg:max-w-[30%]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export async function generateStaticParams() {
  const { posts }: { posts: PostType[] } = await getPosts();

  return posts.map((post) => ({
    blogSlug: post.id.toString(),
  }));
}
export default BlogPage;
