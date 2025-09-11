import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
      </main>

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />

      {/*Footer */}
    </div>
  );
};
