import Subscribe from "@/components/Subscribe";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-200 dark:bg-dark-700">
      <div className="w-full py-4 bg-neutral-300 dark:bg-dark-600">
        <ul className="w-full max-w-6xl mx-auto px-2 flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center">
          <li className="Link-text">
            <Link href={`/`}>home</Link>
          </li>
          <div className="Divider md:hidden" />
          <li className="Link-text">
            <Link href={`/`}>blogs</Link>
          </li>
          <div className="Divider md:hidden" />

          <li className="Link-text">
            <Link href={`/`}>services</Link>
          </li>
          <div className="Divider md:hidden" />

          <li className="Link-text">
            <Link href={`/contact`}>Features</Link>
          </li>
          <div className="Divider md:hidden" />

          <li className="Link-text">
            <Link href={`/`}>Terms and Conditions</Link>
          </li>
          <div className="Divider md:hidden" />

          <li className="Link-text">
            <Link href={`/`}>Privacy Policy</Link>
          </li>
          <div className="Divider md:hidden" />

          <li className="Link-text">
            <Link href={`/`}>contact</Link>
          </li>
        </ul>
        <div className=" flex justify-center items-center gap-8"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto py-16  flex flex-col lg:flex-row-reverse justify-between items-center gap-8 p-4">
        <div className="max-w-lg">
          <Subscribe />
        </div>
        <div className="w-full max-w-lg">
          <h1 className="my-4">
            <Link
              href="/"
              className="w-full h-full text-2xl font-sans font-bold"
            >
              BLOG SERVICE
            </Link>
          </h1>
          <p className="font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
            ipsum praesentium vero accusantium rem non ea magnam nemo. Iste
            dolore reiciendis, pariatur aspernatur facere consequuntur. Eveniet
            asperiores ipsum perferendis!
          </p>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
