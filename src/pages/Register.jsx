import Header from "../components/Header/RegisterHeader";
import RegisterNavbar from "../components/Navbar/RegisterNavbar";
import Breadcrumb from "../components/Common/Breadcrumb";
import RegistrationInfo from "../components/Register/RegistrationInfo";
import RegistrationForm from "../components/Register/RegistrationForm";
import RegisterFooter from "../components/Footer/Footer";

function Register() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <RegisterNavbar />

      <Breadcrumb />

      <div className="max-w-7xl mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RegistrationInfo />
          <RegistrationForm />
        </div>
      </div>

      <RegisterFooter />
    </div>
  );
}

export default Register;