import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/homePage/Home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Login from "./pages/login/Login";
import UserSeat from "./pages/SeatBooking/UserSeat";
import AdminLogin from "./pages/Admin/AdminLogin";
import Admin from "./pages/Admin/Admin";
import Office from "./pages/Admin/Office";
import Location from "./pages/Admin/Location";
import DisplayTable from "./pages/Admin/DisplayTable";
import About from "./pages/About/About";
// import ForgotPassword from "./pages/login/ForgotPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/seat" element={<UserSeat />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/office" element={<Office />} />
        <Route path="/location" element={<Location />} />
        <Route path="/displaytable" element={<DisplayTable />} />
        <Route path="/about" element={<About />} />
        
        {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
