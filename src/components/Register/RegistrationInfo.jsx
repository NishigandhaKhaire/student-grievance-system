const RegistrationInfo = () => {
  return (
    <div className="bg-white border border-gray-300 shadow-sm">
      {/* Top Border */}
      <div className="h-1 bg-[#8b1c24]"></div>

      <div className="p-8">
        {/* Heading */}
        <h2 className="text-[22px] font-bold text-[#5b1b1b] font-serif">
          Register for a Student Account
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 leading-8">
          Create your account using your official college email and
          student ID to start filing and tracking grievances.
        </p>

        {/* Point 1 */}
        <div className="flex items-start mt-8 pb-6 border-b border-dashed">
          <div className="w-8 h-8 rounded-full bg-[#8b1c24] text-white flex items-center justify-center font-semibold text-sm">
            1
          </div>

          <p className="ml-4 text-gray-700 leading-7">
            Every grievance filed receives an{" "}
            <span className="font-bold">
              official reference number
            </span>{" "}
            for tracking.
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-start py-6 border-b border-dashed">
          <div className="w-8 h-8 rounded-full bg-[#8b1c24] text-white flex items-center justify-center font-semibold text-sm">
            2
          </div>

          <p className="ml-4 text-gray-700 leading-7">
            Cases are{" "}
            <span className="font-bold">
              auto-routed
            </span>{" "}
            to the concerned department based on category.
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex items-start py-6">
          <div className="w-8 h-8 rounded-full bg-[#8b1c24] text-white flex items-center justify-center font-semibold text-sm">
            3
          </div>

          <p className="ml-4 text-gray-700 leading-7">
            Unresolved cases are{" "}
            <span className="font-bold">
              escalated automatically
            </span>{" "}
            after the review window.
          </p>
        </div>

        {/* Note */}
        <div className="mt-8 bg-[#fdf1f1] border border-[#f0c6c6] p-6">
          <h3 className="font-bold text-[#7d1118] text-lg">
            Please Note
          </h3>

          <p className="mt-4 leading-7 text-gray-700">
            Registration is permitted only with a valid
            college-issued email ID and student ID number.
            Details will be verified against institute records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInfo;