import type { FC } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-[1200px] mx-auto p-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 cursor-pointer select-none"
        >
          FlavorAI
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
