function StatisticsSection() {
  return (
    <section className="bg-[#8b111c] text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">


        {/* Total Grievances */}
        <div className="text-center py-8 border-r border-red-300/30">

          <h2 className="text-3xl font-bold">
            2,148
          </h2>

          <p className="mt-2 text-sm text-gray-200">
            Total Grievances Filed
          </p>

        </div>



        {/* Resolved */}
        <div className="text-center py-8 border-r border-red-300/30">

          <h2 className="text-3xl font-bold">
            1,896
          </h2>

          <p className="mt-2 text-sm text-gray-200">
            Resolved Cases
          </p>

        </div>



        {/* Time */}
        <div className="text-center py-8 border-r border-red-300/30">

          <h2 className="text-3xl font-bold">
            7 Days
          </h2>

          <p className="mt-2 text-sm text-gray-200">
            Avg. Resolution Time
          </p>

        </div>




        {/* Departments */}
        <div className="text-center py-8">

          <h2 className="text-3xl font-bold">
            05
          </h2>

          <p className="mt-2 text-sm text-gray-200">
            Departments Covered
          </p>

        </div>


      </div>

    </section>
  );
}

export default StatisticsSection;