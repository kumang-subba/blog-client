import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={"/"}
        >
          <img src="./images/logo.png" className=" w-10 h-10" />
          <span className="ml-3 text-xl font-mono">Blog Client</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
