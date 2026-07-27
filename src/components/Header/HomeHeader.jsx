import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function HomeHeader() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#7d0f17] text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          {/* Left */}
          <div className="flex items-center gap-5">
            <button className="hover:underline">
              Skip to Main Content
            </button>

            <button className="hover:underline">
              Screen Reader Access
            </button>

            <button className="hover:underline">
              Sitemap
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button>A-</button>
            <button>A</button>
            <button>A+</button>

            <span>|</span>

            <button>English</button>

            <button>हिन्दी</button>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          {/* Left Side */}
          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="College Logo"
              className="w-16 h-16"
            />

            <div>

              <p className="uppercase text-[13px] tracking-wide text-gray-500">
                Office of the Registrar
              </p>

              <h1 className="text-[34px] font-bold text-[#7d0f17] font-serif leading-tight">
                College Grievance Redressal Portal
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                An initiative for transparent student welfare
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex gap-3">

            <Link
              to="/login"
              className="border border-[#7d0f17] text-[#7d0f17] px-7 py-3 font-semibold hover:bg-[#7d0f17] hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#b01722] text-white px-7 py-3 font-semibold hover:bg-[#8d111b] transition"
            >
              Register
            </Link>

          </div>

        </div>
      </div>
    </>
  );
}

export default HomeHeader;