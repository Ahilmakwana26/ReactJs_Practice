import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-10 py-6">
      <div className="flex items-center justify-between">

        <div className="bg-white px-3 py-2 rounded-md shadow">
          <h1 className="text-sm font-bold text-slate-800">
            CROATIA
          </h1>
        </div>

    <div className="flex justify-between gap-30.5">
        <ul className="hidden md:flex items-center gap-10 text-white text-sm font-light">

          <li className="cursor-pointer hover:text-cyan-300 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-cyan-300 transition">
            Tours
          </li>

          <li className="cursor-pointer hover:text-cyan-300 transition">
            Travel Info
          </li>

          <li className="cursor-pointer hover:text-cyan-300 transition">
            Events
          </li>

          <li className="cursor-pointer hover:text-cyan-300 transition">
            Experiences
          </li>

        </ul>
           <button className="text-white hover:text-cyan-300 transition">
          <Search size={20} />
        </button>
     </div>

      </div>
    </nav>
  );
}