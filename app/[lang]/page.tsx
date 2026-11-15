import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { SelectedWork } from "@/components/SelectedWork";
import { Categories } from "@/components/Categories";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <LogoCloud />
      <SelectedWork />
      <Categories />
      <Services />
      <Process />
      <About />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
