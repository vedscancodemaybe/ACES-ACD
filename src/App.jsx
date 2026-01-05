import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/About";
import OurTeam from "./components/OurTeam/OurTeam";
import ContactPage from "./components/ContactUs/contact";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Community from "./components/JoinCommunity";
import { PageNotFound } from "./components/404";

import Register from "./components/forms/Register";
import Terms from "./components/Legal/Terms";
import Privacy from "./components/Legal/Privacy";
import Refund from "./components/Legal/Refund";

function Layout() {
  const location = useLocation();
  const isErrorPage = location.pathname === "/error";

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-Team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Event Registration */}
        <Route path="/register/:eventId" element={<Register />} />

        {/* Legal Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />

        {/* Errors */}
        <Route path="/error" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>

      {/* Footer & Community (reactive & safe) */}
      {!isErrorPage && (
        <>
          <Community />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
