import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Visit from "@/components/contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-base">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  );
}
