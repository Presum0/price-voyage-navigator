
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./Home/components/HeroSection";
import { FeaturesSection } from "./Home/components/FeaturesSection";
import { FeaturedProducts } from "./Home/components/FeaturedProducts";
import { BestDealSection } from "./Home/components/BestDealSection";
import { CTASection } from "./Home/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturedProducts />
        <BestDealSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
