
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <nav className="bg-[#aa1622] shadow">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center text-white text-[15px]">

          {/* Home */}
          <li className="bg-[#7d0f17] border-r border-red-800">
            <Link
              to="/"
              className="block px-8 py-4 font-semibold"
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li className="border-r border-red-800">
            <a
              href="#"
              className="block px-8 py-4 hover:bg-[#7d0f17] transition"
            >
              About the Portal
            </a>
          </li>

          {/* Departments */}
          <li className="border-r border-red-800">
            <a
              href="#"
              className="block px-8 py-4 hover:bg-[#7d0f17] transition"
            >
              Departments
            </a>
          </li>

          {/* Track */}
          <li className="border-r border-red-800">
            <a
              href="#"
              className="block px-8 py-4 hover:bg-[#7d0f17] transition"
            >
              Track Grievance
            </a>
          </li>

          {/* Guidelines */}
          <li className="border-r border-red-800">
            <a
              href="#"
              className="block px-8 py-4 hover:bg-[#7d0f17] transition"
            >
              Guidelines
            </a>
          </li>

          {/* Contact */}
          <li>
            <a
              href="#"
              className="block px-8 py-4 hover:bg-[#7d0f17] transition"
            >
              Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;