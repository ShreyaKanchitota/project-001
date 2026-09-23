import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Pricing from "@/app/components/Pricing";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Stats from "@/app/components/Stats";
import FloatingCTA from "@/app/components/FloatingCTA";
import FAQ from "@/app/components/FAQ";
import Contact from "@/app/components/Contact";
import SectionDivider from "./components/SectionDivider";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
  <ScrollProgress />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      <Navbar />

<Hero />

<SectionDivider />

<Stats />

<SectionDivider />

<Features />

<SectionDivider />

<Gallery />

<SectionDivider />

<Pricing />

<SectionDivider />

<Testimonials />

<FAQ />

<Contact />

<Footer />

<FloatingCTA />
    </main>
  );
}