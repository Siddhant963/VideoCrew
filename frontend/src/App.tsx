import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Process from "./pages/Process"
import Portfolio from "./pages/Portfolio"
import Differentiation from "./pages/Differentiation"
import Contact from "./pages/Contact"
import Dashboard from "./admin/Dashboard"
import "./index.css"

const App: React.FC = () => {
  return (
    <>
    <Navbar/>
     {/* <Router> */}
    
        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/differentiation" element={<Differentiation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer /> */}

    {/* </Router> */}
    {/* <Footer/> */}
   
    </>
  )
}

export default App
