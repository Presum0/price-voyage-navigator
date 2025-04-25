
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Award, ChevronRight, Filter, LucideIcon, Percent, Search, ShoppingCart, Zap
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockData";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Featured products (top 4 from mock data)
  const featuredProducts = mockProducts.slice(0, 4);
  
  // Best deal product (product with lowest total cost)
  const bestDealProduct = [...mockProducts].sort((a, b) => 
    (a.price + a.shipping + a.tax) - (b.price + b.shipping + b.tax)
  )[0];
  
  // Features section content
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
          <div className="container py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">
                Find the Best Deals Worldwide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Compare prices across Amazon, eBay, Flipkart, and more to find the lowest prices including shipping and taxes.
              </p>
              
              <form onSubmit={handleSearch} className="max-w-lg mx-auto relative">
                <Input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  className="pl-4 pr-14 py-6 rounded-full shadow-lg border-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit"
                  size="icon"
                  className="absolute right-1.5 top-1.5 rounded-full w-9 h-9"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span>Popular:</span>
                {["iPhone 14", "Gaming Laptop", "Headphones", "Smartwatch"].map((term) => (
                  <Button
                    key={term}
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
          </div>
        </section>
        
        {/* Features section */}
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
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured products section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View all <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isBestDeal={product.id === bestDealProduct.id}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Best Deal of the Day */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold inline-flex items-center gap-2 mb-3">
                <ShoppingCart className="h-6 w-6 text-primary" />
                Best Deal of the Day
              </h2>
              <p className="text-muted-foreground">
                Today's top pick with the greatest value for your money
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <ProductCard product={bestDealProduct} isBestDeal={true} />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/90 to-violet-600 text-white">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of smart shoppers who save money every day by using GloPrice to compare prices across multiple platforms.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/signup")}
              >
                Sign Up for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  setSearchQuery("iPhone 14");
                  navigate("/search?q=iPhone+14");
                }}
              >
                Try a Search
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
