import type React from "react"
import HeroSection from "../components/home/HeroSection"
import ServicesGrid from "../components/home/ServicesGrid"

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesGrid />
    </main>
  )
}

export default Home
