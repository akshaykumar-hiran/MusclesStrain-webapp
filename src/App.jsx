import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Programs from "./pages/Programs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

// Layout component with Navbar and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the child route's element */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar & Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Routes without Navbar & Footer */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
