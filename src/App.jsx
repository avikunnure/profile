
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./sections/HeroSection";
import SolutionsSection from "./sections/SolutionsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ProcessSection from "./sections/ProcessSection";
import PartnershipSection from "./sections/PartnershipSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <SolutionsSection />
        <ProjectsSection />
        <ProcessSection />
        <PartnershipSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
