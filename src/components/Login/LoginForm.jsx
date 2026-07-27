function LoginForm() {
  return (
    <div className="bg-white border border-gray-300">
      {/* Maroon header */}
      <div className="bg-[#8b1c24] px-6 py-4 text-white">
        <p className="text-xs uppercase tracking-widest opacity-80">Secure Login</p>
        <h2 className="text-2xl font-serif font-bold mt-0.5">Sign In to Continue</h2>
      </div>

      {/* Form body */}
      <div className="px-6 py-6 space-y-5">
        {/* Tabs */}
        <div className="flex border border-gray-300 rounded overflow-hidden text-sm">
          <button className="flex-1 bg-[#8b1c24] text-white py-2 font-semibold">Student</button>
          <button className="flex-1 py-2 text-gray-700 font-medium border-l border-gray-300">Dept. Staff</button>
          <button className="flex-1 py-2 text-gray-700 font-medium border-l border-gray-300">Admin</button>
        </div>

        {/* Student ID */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Student ID / Registered Email <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 21CS1042 or name@college.edu"
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8b1c24]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8b1c24]"
          />
        </div>

        {/* Captcha */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Enter Code Shown Below <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 border border-gray-300 px-5 py-2 font-bold tracking-[4px] text-[#8b1c24] text-sm">
              7 K 3 R B
            </div>
            <button className="text-sm text-[#8b1c24] font-semibold flex items-center gap-1">
              ↻ Refresh
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter the code above"
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#8b1c24]"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="accent-[#8b1c24]" /> Keep me signed in
          </label>
          <button className="text-[#8b1c24] font-semibold">Forgot Password?</button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#8b1c24] hover:bg-[#72151c] text-white py-3 font-semibold text-sm">
          Login to Portal
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-700">
          New student?{" "}
          <span className="text-[#8b1c24] font-semibold cursor-pointer">Register here</span>
        </p>
      </div>

      {/* Footer note */}
      <div className="border-t border-gray-200 px-6 py-4 text-center">
        <p className="text-xs text-gray-500">
          This is an official portal of the college administration. Unauthorized access or misuse of credentials is a punishable offence under the institute’s IT policy.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
