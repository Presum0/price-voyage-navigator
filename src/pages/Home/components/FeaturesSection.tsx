
import { Filter, Percent, Zap, Award } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

interface FeatureProps {
  icon: typeof Filter;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: Filter,
    title: "Compare Across Platforms",
    description: "Find the best prices by comparing products from Amazon, eBay, Flipkart, and more.",
  },
  {
    icon: Percent,
    title: "Price Drop Alerts",
    description: "Set alerts and get notified when prices drop below your desired threshold.",
  },
  {
    icon: Zap,
    title: "Real-time Price Updates",
    description: "Get the most up-to-date prices and availability from all major e-commerce sites.",
  },
  {
    icon: Award,
    title: "Best Deal Finder",
    description: "We automatically highlight the best deals based on total cost including shipping and taxes.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How GloPrice Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you find the best deals by comparing prices across multiple e-commerce platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
