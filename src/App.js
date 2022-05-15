import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/Page/About/About";
import Appointment from "./Component/Page/Appointment/Appointment";
import Contact from "./Component/Page/Contact/Contact";
import Home from "./Component/Page/Home/Home";
import Login from "./Component/Page/Login/Login";
import Register from "./Component/Page/Register/Register";
import Review from "./Component/Page/Review/Review";
import Header from "./Component/Shered/Header/Header";
import NotFound from "./Component/Shered/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Component/Shered/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="singup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
