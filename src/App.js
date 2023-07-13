// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
// app routes
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/M_Vincent_Richards_Portfolio/" element={<Home />} /> {/* home page */}
        <Route path="/M_Vincent_Richards_Portfolio/about" element={<About />} /> {/* about page */}
        <Route path="/M_Vincent_Richards_Portfolio/portfolio" element={<Portfolio />} /> {/* portfolio page */}
        <Route path="/M_Vincent_Richards_Portfolio/contact" element={<Contact />} /> {/* contact page */}
        <Route path="/M_Vincent_Richards_Portfolio/resume" element={<Resume />} /> {/* resume page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
// export
export default App;
