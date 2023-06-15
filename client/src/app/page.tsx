import ButtonToggleTheme from "@/components/ui/ButtonToggleTheme";
import Image from "next/image";
import { getPosts } from "@/libs/server/post";
export default async function Home() {
  const { posts }: { posts: PostType[] } = await getPosts();
  return (
    <main className="">
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
