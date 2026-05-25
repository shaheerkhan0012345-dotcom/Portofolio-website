import { SplineSceneBasic } from "@/components/ui/demo";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { AboutSection } from "@/components/ui/about";
import { SkillsSection } from "@/components/ui/skills";
import { ProjectsSection } from "@/components/ui/projects";
import { ContactSection } from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <SlideTabs />
      </div>
      <div id="home">
        <SplineSceneBasic />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
