function HomeFooter() {
  return (
    <footer className="bg-[#870f18] text-white">


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">


        {/* About Portal */}
        <div>

          <h3 className="font-bold text-lg mb-4">
            College Grievance Redressal Portal
          </h3>

          <p className="text-sm text-gray-200 leading-7">
            An official student grievance tracking system maintained
            by the Office of the Registrar for transparent,
            time-bound complaint resolution.
          </p>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="font-bold text-lg mb-4">
            Quick Links
          </h3>


          <ul className="space-y-3 text-sm text-gray-200">

            <li>
              About the Portal
            </li>

            <li>
              Grievance Guidelines
            </li>

            <li>
              Departments
            </li>

            <li>
              FAQs
            </li>

          </ul>

        </div>




        {/* Student Services */}
        <div>

          <h3 className="font-bold text-lg mb-4">
            Student Services
          </h3>


          <ul className="space-y-3 text-sm text-gray-200">

            <li>
              Login
            </li>

            <li>
              Register
            </li>

            <li>
              Track Grievance
            </li>

            <li>
              Contact Registrar
            </li>

          </ul>

        </div>




        {/* Contact */}
        <div>

          <h3 className="font-bold text-lg mb-4">
            Contact
          </h3>


          <ul className="space-y-3 text-sm text-gray-200">

            <li>
              Registrar's Office, Main Campus Building
            </li>

            <li>
              Helpline: 1800-XXX-XXXX
            </li>

            <li>
              grievance@college.edu.in
            </li>

          </ul>

        </div>


      </div>



      {/* Bottom Bar */}
      <div className="border-t border-red-400/30">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-200">


          <p>
            © 2026 College Grievance Redressal Portal. All Rights Reserved.
          </p>


          <p>
            Best viewed in Chrome, Firefox, Edge
          </p>


        </div>

      </div>


    </footer>
  );
}

export default HomeFooter;