// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
// pages
import Header from "./pages/header";
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
        <Route path="/" element={<Header />} /> {/* home page / about preview */}
        <Route path="/about" element={<About />} /> {/* about page */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* portfolio page */}
        <Route path="/contact" element={<Contact />} /> {/* contact page */}
        <Route path="/resume" element={<Resume />} /> {/* resume page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
// export
export default App;
