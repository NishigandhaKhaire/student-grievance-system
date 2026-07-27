function NoticeBar() {
  return (
    <div className="bg-[#fdf2f2] border-y border-[#ead2d2]">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2">

        {/* Notice Badge */}
        <span className="bg-[#a81420] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-sm">
          Notice
        </span>

        {/* Notice Text */}
        <p className="ml-4 text-[14px] text-gray-700">
          <span className="font-semibold text-[#7d0f17]">
            Escalation policy updated:
          </span>{" "}
          Grievances unresolved after{" "}
          <span className="font-semibold">7 working days</span> are now
          auto-escalated to the Head of Department. Effective Aug 2026.
        </p>

      </div>
    </div>
  );
}

export default NoticeBar;