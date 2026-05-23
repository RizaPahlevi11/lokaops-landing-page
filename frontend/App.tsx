import { useEffect, useState } from "react";
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
import AuthPage from "./components/AuthPage";

type Page = "landing" | "auth";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  if (page === "auth") {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          * { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}</style>
        <AuthPage onBack={() => setPage("landing")} />
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
      <div className="bg-[#F8FAFC] text-[#0F172A]">
        <Navbar onAuthClick={() => setPage("auth")} />
        <main>
          <HeroSection onAuthClick={() => setPage("auth")} />
          <ProblemSection />
          <WorkflowSection />
          <FeatureSection />
          <DashboardPreview />
          <UseCaseSection />
          <BeforeAfterSection />
          <PricingSection onAuthClick={() => setPage("auth")} />
          <FAQSection />
          <FinalCTA onAuthClick={() => setPage("auth")} />
        </main>
        <Footer />
      </div>
    </>
  );
}
