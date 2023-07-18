// imports
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// app routes
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        // this part of route path was required during testing:
        /M_Vincent_Richards_Portfolio
        <Route path="/" element={<Home />} /> {/* home page */}
        <Route path="/about" element={<About />} /> {/* about page */}
        <Route path="/portfolio" element={<Portfolio />} />{" "}
        {/* portfolio page */}
        <Route path="/contact" element={<Contact />} /> {/* contact page */}
        <Route path="/resume" element={<Resume />} /> {/* resume page */}
      </Routes>
      <Footer />
    </Router>
  );
}
// export
export default App;
