// src/pages/LandingPage.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import FeatureSlider from "../components/FeatureSlider";
import InstallationVideo from "../components/InstallationVideo";
import PricingSection from "../components/PricingSection";
import Timeline from "../components/TimeLine";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


function LandingPage() {
  return (
    <>
      
      <Navbar />
      <Hero />
      
      
      
    
    
      <Products />
      <FeatureSlider />
      <InstallationVideo />
      <PricingSection />
      <Timeline />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
