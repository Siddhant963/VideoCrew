import type React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Differentiation from "./pages/Differentiation";
import Contact from "./pages/Contact";
import Dashboard from "./admin/AdminDashboard";
import "./index.css";
import { useState } from "react";

const App: React.FC = () => {
    const [user, setUser] = useState<{ name: string; email: string } | null>({
    name: "Alice",
    email: "alice@example.com",
  });

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/differentiation" element={<Differentiation />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <div>Please login to access dashboard</div>
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
