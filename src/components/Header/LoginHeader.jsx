import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function LoginHeader() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#7b0000] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="space-x-4">
            <button>Skip to Main Content</button>
            <span>|</span>
            <button>Screen Reader Access</button>
          </div>

          <div className="space-x-3">
            <button>English</button>
            <button>हिन्दी</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <div className="flex items-center gap-5">
            <img src={logo} alt="logo" className="w-20 h-20" />

            <div>
              <h2 className="text-3xl font-bold text-[#7b0000]">
                Office of Registrar
              </h2>

              <p className="text-gray-600">
                College Grievance Redressal Portal
              </p>
            </div>
          </div>
          <div className="flex gap-3">
  <Link
    to="/"
    className="border border-[#7b0000] text-[#7b0000] px-6 py-2 rounded hover:bg-[#7b0000] hover:text-white"
  >
    Home
  </Link>

  <Link
    to="/register"
    className="bg-[#7b0000] text-white px-6 py-2 rounded hover:bg-[#5f0000]"
  >
    Register
  </Link>
</div>

         
        </div>
      </div>
    </>
  );
}

export default LoginHeader;