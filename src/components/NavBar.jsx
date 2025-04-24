import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const getLinkClass = ({ isActive }) => 
    isActive ? "text-yellow-500 text-2xl font-bold underline" : "text-2xl text-green-600 hover:text-gray-600";

  return (
    <div className="container max-w-full mx-auto flex justify-between items-center py-4 px-6 bg-gray-800 shadow-md">
      <a href="#" className="font-bold text-3xl text-amber-300 ">Logo</a>
      <ul className="flex space-x-4">
        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={getLinkClass}>About</NavLink></li>
        <li><NavLink to="/dashbord" className={getLinkClass}>Services</NavLink></li>
        <li><NavLink to="/contact" className={getLinkClass}>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;



