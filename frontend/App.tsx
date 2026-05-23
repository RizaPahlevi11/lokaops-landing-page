import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import WorkflowSection from "./components/WorkflowSection";
import FeatureSection from "./components/FeatureSection";
import DashboardPreview from "./components/DashboardPreview";
import UseCaseSection from "./components/UseCaseSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
      <div className="bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <WorkflowSection />
          <FeatureSection />
          <DashboardPreview />
          <UseCaseSection />
          <BeforeAfterSection />
          <PricingSection />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
