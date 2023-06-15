import React from "react";
import Topbar from "./Topbar";
import Appbar from "./Appbar";

const Header = () => {
  return (
    <header className="sticky">
      <Topbar />
      <Appbar />
    </header>
  );
};

export default Header;
