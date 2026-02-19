import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinSection from "@/components/JoinSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
// import Features from "@/components/Features";
// import About from "@/components/About";
// import Team from "@/components/Team";
// import Services from "@/components/Services";
// import Pricing from "@/components/Pricing";
// import Projects from "@/components/Projects";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ValuesSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <PortfolioSection />
      <ContactSection />
      <JoinSection />
      <Footer  />
      {/* <Features />
      <About />
      <Team />
      <Services />
      <Pricing />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}
