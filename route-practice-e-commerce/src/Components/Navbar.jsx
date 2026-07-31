import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a className="flex items-center gap-2 font-bold text-2xl tracking-wider text-slate-900">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-black">C</span>
          </div>
          CRESCENDO
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <NavLink to="/"  className={({isActive})=> isActive ? "text-2xl" : "hover:text-blue-600 transition-colors cursor-pointer"}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive ? "text-2xl" :"hover:text-blue-600 transition-colors cursor-pointer"}>Products</NavLink>
          <Link to="/about" className="hover:text-blue-600 transition-colors cursor-pointer">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors cursor-pointer">Contact</Link>
          <Link to="/dashboard" className="hover:text-blue-600 transition-colors cursor-pointer">Dashboard</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link to={'/login'} className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Log In
          </Link>
          <a  className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;