import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center p-3 md:p-5 lg:p-6 rounded-lg bg-white">
      <nav className="hidden md:flex items-center md:gap-5 lg:gap-10">
        <a href="/" className="text-nowrap">
          New Drops 🔥
        </a>
        <a href="/">Men</a>
        <a href="/">Women</a>
      </nav>

      <button className="block md:hidden">
        <img src="/hamburger.svg" alt="hamburger-svg" />
      </button>

      <Link to="/">
        <img
          src="/logo.svg"
          className="mx-auto md:me-0 ms-auto lg:mx-auto"
          alt="logo-svg"
        />
      </Link>

      <div className="flex items-center gap-3 md:gap-5 lg:gap-10 ms-auto">
        <img src="/user.svg" alt="user-svg" className="size-[20px]" />
        <img src="/search.svg" alt="search-svg" className="size-[20px]" />
        <Link
          to="/bag"
          className="bg-yellow size-[30px] rounded-full grid place-items-center"
        >
          0
        </Link>
      </div>
    </header>
  );
};

export default Header;
