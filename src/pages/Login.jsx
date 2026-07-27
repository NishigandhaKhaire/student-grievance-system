import Header from "../components/Header/LoginHeader.jsx";
import Navbar from "../components/Navbar/LoginNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Breadcrumb from "../components/Common/Breadcrumb";
import LoginInfo from "../components/Login/LoginInfo";
import LoginForm from "../components/Login/LoginForm";

function Login() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header page="login" />

      <Navbar active="login" />

      <Breadcrumb />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LoginInfo />
          <LoginForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;