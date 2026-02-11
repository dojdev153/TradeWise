import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import FeaturesSection from "./components/sections/FeaturesSection"
import AudienceSection from "./components/sections/AudienceSection"
import HowItWorksSection from "./components/sections/HowItWorksSection"
import BenefitsSection from "./components/sections/BenefitsSection"
import PricingSection from "./components/sections/PricingSection"

// Auth Components
import AuthLayout from "./components/auth/AuthLayout"
import LoginPage from "./components/auth/LoginPage"
import RegisterPage from "./components/auth/RegisterPage"

// Dashboard Components
import FarmerDashboard from "./components/dashboard/FarmerDashboard"

// Layout for the landing page (Navbar + Footer)
const LandingLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AudienceSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
