import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jomin Binny — Full Stack Developer" },
      {
        name: "description",
        content:
          "Backend-focused developer building scalable systems and real-world solutions with Node.js, Python, and React.",
      },
      { property: "og:title", content: "Jomin Binny — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Backend-focused developer building scalable systems and real-world solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
