// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import NavBar_ from "./components/NavBar_";
import Footer_ from "./components/Footer_";
// pages
import Home_ from "./pages/Home_";
import About_ from "./pages/About_";
import Portfolio_ from "./pages/Portfolio_";
import Contact_ from "./pages/Contact_";
import Resume_ from "./pages/Resume_";
// app routes
function App() {
  return (
    <BrowserRouter>
      <NavBar_ />
      <Routes>
        // this part of route path was required during testing:
        /M_Vincent_Richards_Portfolio
        <Route path="/" element={<Home_ />} /> {/* home page */}
        <Route path="/about_" element={<About_ />} /> {/* about page */}
        <Route path="/portfolio_" element={<Portfolio_ />} />
        {/* portfolio page */}
        <Route path="/contact_" element={<Contact_ />} /> {/* contact page */}
        <Route path="/resume_" element={<Resume_ />} /> {/* resume page */}
      </Routes>
      <Footer_ />
    </BrowserRouter>
  );
}
// export
export default App;
