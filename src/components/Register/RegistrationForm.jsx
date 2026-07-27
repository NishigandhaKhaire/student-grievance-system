const RegistrationForm = () => {
  return (
    <div className="bg-white border border-gray-300 shadow-sm w-full">
      {/* Header */}
      <div className="bg-[#8b1c24] px-6 py-5 text-white">
        <p className="uppercase text-xs tracking-widest opacity-80">
          New Registration
        </p>

        <h2 className="text-3xl font-serif font-bold mt-1">
          Student Registration Form
        </h2>
      </div>

      {/* Form */}
      <div className="p-6">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold text-[14px]">
              Full Name <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              placeholder="As per college records"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
            />
          </div>

          <div>
            <label className="font-semibold text-[14px]">
              Student ID <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. 21CS1042"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="font-semibold text-[14px]">
            College Email ID <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            placeholder="name@college.edu.in"
            className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
          />
        </div>

        {/* Department */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <label className="font-semibold text-[14px]">
              Department <span className="text-red-600">*</span>
            </label>

            <select className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm">
              <option>Computer Science</option> 
              <option>AIDS</option>
              <option>AI/ML</option>
              <option>Civil Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electrical Engineering</option> 
              <option>ENTC</option>
              <option>Robotics</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-[14px]">
              Year of Study <span className="text-red-600">*</span>
            </label>

            <select className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm">
              <option>1st Year</option> 
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <label className="font-semibold text-[14px]">
              Password <span className="text-red-600">*</span>
            </label>

            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
            />
          </div>

          <div>
            <label className="font-semibold text-[14px]">
              Confirm Password <span className="text-red-600">*</span>
            </label>

            <input
              type="password"
              placeholder="Re-enter password"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
            /> 
            </div>
        </div> 
                {/* Captcha */}
        <div className="mt-6">
          <label className="block text-[14px] font-semibold mb-2">
            Enter Code Shown Below <span className="text-red-600">*</span>
          </label>

          <div className="flex items-center gap-4">
            <div className="border border-gray-300 bg-gray-100 px-6 py-3 text-xl font-bold tracking-[8px]">
              9&nbsp;&nbsp;T&nbsp;&nbsp;4&nbsp;&nbsp;X&nbsp;&nbsp;L
            </div>

            <button
              type="button"
              className="text-[#8b1c24] text-sm font-semibold hover:underline"
            >
              ↻ Refresh
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter the code above"
            className="mt-4 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#8b1c24]"
          />
        </div> 
                {/* Terms */}
        <div className="flex items-start gap-3 mt-6">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 accent-[#8b1c24]"
          />

          <p className="text-sm text-gray-600 leading-6">
            I agree to the{" "}
            <span className="text-[#8b1c24] font-semibold cursor-pointer hover:underline">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-[#8b1c24] font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>.
          </p>
        </div>

        {/* Register Button */}
        <button
          className="w-full mt-8 bg-[#8b1c24] hover:bg-[#74161d] transition duration-300 text-white py-3 rounded-md font-semibold text-lg"
        >
          Register Account
        </button>

        {/* Login */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-[#8b1c24] font-semibold cursor-pointer hover:underline">
              Login Here
            </span>
          </p>
        </div> 
        
        {/* Disclaimer */}
        <div className="text-center px-6 py-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            This is an official portal of the college administration.
            Providing false information during registration may lead to
            disciplinary action.
          </p>
        </div>

      </div>

      </div> 
  );
};

export default RegistrationForm;