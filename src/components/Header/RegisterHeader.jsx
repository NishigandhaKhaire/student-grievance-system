import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function RegisterHeader() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#87131B] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-7 px-4">

          <div className="flex items-center gap-6">
            <button className="hover:underline">
              Skip to Main Content
            </button>

            <button className="hover:underline">
              Screen Reader Access
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button>English</button>
            <span>|</span>
            <button>हिन्दी</button>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

          {/* Left */}
          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <p className="text-[12px] uppercase tracking-wide text-gray-500">
                Office of the Registrar
              </p>

              <h1 className="text-[18px] font-bold text-[#6f1d22] leading-none">
                College Grievance Redressal Portal
              </h1>
            </div>

          </div>

          {/* Right */}
          <div className="flex gap-3">

            <Link
              to="/"
              className="border border-[#87131B] text-[#87131B] px-6 py-2 rounded text-sm font-semibold hover:bg-[#87131B] hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="bg-[#87131B] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#6b0f15] transition"
            >
              Login
            </Link>

          </div>

        </div>
      </header>
    </>
  );
}

export default RegisterHeader;