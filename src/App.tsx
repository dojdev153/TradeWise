import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import FeaturesSection from "./components/sections/FeaturesSection"
import AudienceSection from "./components/sections/AudienceSection"
import HowItWorksSection from "./components/sections/HowItWorksSection"
import BenefitsSection from "./components/sections/BenefitsSection"
import PricingSection from "./components/sections/PricingSection"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <AudienceSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
