import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";

import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";
import NavbarD2 from "./NavbarD2/NavbarD2";
import ViewProject from "./ViewProject/ViewProject";
import BottomToTop from "./ButtomToTop/BottomToTop";
import Interior from "./Interior/Interior.jsx";

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavbarD2 />
      <BottomToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/project"} element={<ViewProject />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/interior"} element={<Interior />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
