import { Link } from "react-router-dom";

function LoginNavbar() {
  return (
    <nav className="bg-[#8B0D1A]">
      <div className="max-w-7xl mx-auto">
        <ul className="flex text-white text-[15px]">

          <li className="border-r border-[#a52a35]">
            <Link to="/" className="block px-9 py-4 hover:bg-[#730b15]">
              Home
            </Link>
          </li>

          <li className="border-r border-[#a52a35]">
            <a href="#" className="block px-9 py-4 hover:bg-[#730b15]">
              About the Portal
            </a>
          </li>

          <li className="border-r border-[#a52a35]">
            <a href="#" className="block px-9 py-4 hover:bg-[#730b15]">
              Departments
            </a>
          </li>

          <li className="bg-[#6b0812] border-r border-[#a52a35]">
            <Link to="/login" className="block px-9 py-4 font-semibold">
              Login
            </Link>
          </li>

          <li className="border-r border-[#a52a35]">
            <a href="#" className="block px-9 py-4 hover:bg-[#730b15]">
              Guidelines
            </a>
          </li>

          <li>
            <a href="#" className="block px-9 py-4 hover:bg-[#730b15]">
              Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default LoginNavbar;