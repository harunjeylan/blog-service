import BlogList from "./sections/BolgList";
import Hero from "./sections/Hero";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <BlogList />
    </main>
  );
}
