import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/Login";
import HeroSection from "../Components/Hero/heroSection";
import Signup from "../pages/signup/signup";
import View from "../pages/View/view";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
const MyRoutes = ({ data }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Checkout" element={<CheckoutPage />} />

          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
