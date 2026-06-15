import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { VisitUs } from "@/components/VisitUs";
import { SocialFeed } from "@/components/SocialFeed";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Features />
        <Gallery />
        <VisitUs />
        <SocialFeed />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
}
