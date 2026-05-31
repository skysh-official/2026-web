import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Highlights from "@/components/landing/Highlights";
import Schedule from "@/components/landing/Schedule";
import Benefits from "@/components/landing/Benefits";
import About from "@/components/landing/About";
import Hosts from "@/components/landing/Hosts";
import Sponsors from "@/components/landing/Sponsors";
import Contacts from "@/components/landing/Contacts";
import FAQ from "@/components/landing/FAQ";
import Apply from "@/components/landing/Apply";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="scanlines min-h-screen">
      <div className="site-header">
        <Nav />
      </div>
      <main style={{ paddingTop: "var(--site-header-h)" }}>
        <Hero />
        <Highlights />
        <Schedule />
        <Benefits />
        <Apply />
        <About />
        <Hosts />
        <Sponsors />
        <Contacts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
