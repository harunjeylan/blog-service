import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-dark-700 py-8">
      <div className="w-full flex flex-col lg:flex-row gap-8 p-4">
        <div className="w-full">
          <div>
            <h1>BLOG SERVICES</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              ipsum praesentium vero accusantium rem non ea magnam nemo. Iste
              dolore reiciendis, pariatur aspernatur facere consequuntur.
              Eveniet asperiores ipsum perferendis!
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full">
          <div>
            <ul className="hidden md:flex justify-end items-center gap-4">
              <li className="Link-text">
                <Link href={`/`}>blogs</Link>
              </li>
              <li className="Link-text">
                <Link href={`/services`}>services</Link>
              </li>
              <li className="Link-text">
                <Link href={`/contact`}>contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Subscribe to Rein</h4>
            <p>Get the latest posts delivered right to your email.</p>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
