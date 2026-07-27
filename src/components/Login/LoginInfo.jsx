
function LoginInfo() {
  return (
    <div className="bg-white border border-gray-300">
      {/* Top maroon line */}
      <div className="border-t-4 border-[#8b1c24] px-6 py-5">
        <h2 className="text-2xl font-serif font-bold text-[#5b1b20]">
          Access Your Grievance Account
        </h2>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Log in using your registered Student ID, Department Staff ID, or
          Admin credentials to view, submit, or manage grievances.
        </p>
      </div>

      {/* Roles */}
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {/* Student */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#a31522] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              1
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Students</span> — view status of filed grievances and submit new ones.
            </p>
          </div>

          {/* Staff */}
          <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
            <div className="w-6 h-6 rounded-full bg-[#a31522] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              2
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Department Staff</span> — review and respond to assigned cases.
            </p>
          </div>

          {/* Admin */}
          <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
            <div className="w-6 h-6 rounded-full bg-[#a31522] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              3
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Administrators</span> — monitor escalations and generate reports.
            </p>
          </div>
        </div>

        {/* Help Box */}
        <div className="mt-6 bg-[#fff5f5] border border-[#e8c8c8] p-4">
          <h3 className="text-sm font-bold text-[#8b1c24]">Facing login issues?</h3>
          <p className="text-xs text-gray-700 mt-1 leading-relaxed">
            Contact the IT Helpdesk at 1800-XXX-XXXX or write to helpdesk@college.edu.in between 9:00 AM and 5:30 PM, Monday to Saturday.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
