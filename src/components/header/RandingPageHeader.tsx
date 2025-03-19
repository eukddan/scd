import React from "react";
import { Link } from "react-router-dom";

const RandingPageHeader = () => {
  return (
    <header className="w-full bg-mainnavy py-4 px-8 flex justify-start items-center shadow-md">
      <h1 className="text-2xl font-bold">
        <span>Zero</span>
        <span className="text-mainmint">Fit</span>
      </h1>
      <nav className="hidden px-16 md:flex gap-6 text-gray-300">
        <Link
          to="/consulting/step1"
          className="hover:text-white transition mr-6"
        >
          컨설팅
        </Link>
        <a href="#contact" className="hover:text-white transition">
          문의하기
        </a>
      </nav>
    </header>
  );
};

export default RandingPageHeader;
