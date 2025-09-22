import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Landing from "../pages/Landing/Landing";
import Services from "../pages/Service/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

// Admin
import Login from "../admin/page/Login";
import AdminDashboard from "../admin/page/AdminDashboard";
import ProtectedRoute from "../admin/page/ProtectedRouter";
import ServiceForm from "../admin/components/ServiceForm";
import AboutForm from "../admin/components/AboutForm";
import FeedbackList from "../admin/components/FeedbackList";
import WhatsappButton from "../components/ui/WhatsappButton";

const Router = () => {
  return (
    <Routes>
      {/* Rutas públicas con Header/Footer */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Landing />
            <Footer />
            <WhatsappButton />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <Header />
            <Services />
            <WhatsappButton />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <WhatsappButton />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
            <WhatsappButton />
            <Footer />
          </>
        }
      />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin protegido */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="services" element={<ServiceForm />} />
        <Route path="about" element={<AboutForm />} />
        <Route path="feedback" element={<FeedbackList />} />
      </Route>
    </Routes>
  );
};

export default Router;
