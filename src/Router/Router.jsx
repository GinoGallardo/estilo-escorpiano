import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Landing from "../pages/Landing/Landing";
import Services from "../pages/Service/Services";
import About from "../pages/about/About";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
