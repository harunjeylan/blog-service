import Link from "next/link";
import React, { ReactNode } from "react";

type NavlinkProps = {
  children: ReactNode | string;
  id?: string | "";
  className?: string | "";
  href?: string;
};

const Navlink = ({
  children,
  href = "",
  id = "",
  className = "",
}: NavlinkProps) => {
  return (
    <li
      id={id}
      data-test-id={`Navlink-${id}`}
      className={`${className} w-full h-full flex `}
    >
      <Link
        href={href}
        className="w-full h-full p-2 flex items-center justify-start gap-2 hover:bg-neutral-300 hover:dark:bg-dark-700 ease-in-out duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navlink;
