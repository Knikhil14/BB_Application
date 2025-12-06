import React from "react";
import { Menu } from "lucide-react";

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Barber Booking</h1>

      <button
        className="px-4 py-1 bg-gray-700 rounded-md"
        onClick={() => setCurrentPage("home")}
      >
        Home
      </button>
    </nav>
  );
};

export default NavBar;
