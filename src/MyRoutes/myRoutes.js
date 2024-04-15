import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/Login";
import HeroSection from "../Components/Hero/heroSection";
const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/hero" element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
