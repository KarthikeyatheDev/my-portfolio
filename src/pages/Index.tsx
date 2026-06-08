import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsMarquee />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}