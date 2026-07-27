const Breadcrumb = () => {
  return (
    <div className="bg-[#fafafa] border-b">
      <div className="max-w-7xl mx-auto py-3 text-[14px] text-gray-600">
        <span>Home</span>

        <span className="mx-2">&gt;</span>

        <span className="font-semibold text-[#8B0D1A]">
          New Student Registration
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;