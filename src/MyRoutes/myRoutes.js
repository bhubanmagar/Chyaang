import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/Login";
const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
