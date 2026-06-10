import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Businesses from "./components/Businesses";
import Clients from "./components/Clients";
import Glance from "./components/Glance";
import Footer from "./components/Footer";
import AboutDetails from "./components/AboutDetails";
import BusinessesPage from "./components/BusinessesPage";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollTop";
import Careers from "./components/Careers";
import SearchPage from "./components/SearchPage";
import Insights from "./components/Insigths";
import InsightsDetails from "./components/InsightsDetails";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false,
      offset: 60,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Businesses />
              <Clients />
              <Glance />
            </>
          }
        />

        <Route path="/about" element={<AboutDetails />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightsDetails />} />
      </Routes>
      {!location.pathname.startsWith("/insights") && <Insights />}
      <Contact />

      <Footer />
    </>
  );
}

export default App;
