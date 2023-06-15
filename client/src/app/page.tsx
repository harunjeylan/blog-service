import BlogList from "./sections/BolgList";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Sidebar from "./sections/Sidebar";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <section className="xl:container my-2 px-4 mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-8 ">
          <div className="lg:max-w-[70%]">
            <BlogList />
          </div>
          <div className="lg:max-w-[30%]">
            <Sidebar />
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
