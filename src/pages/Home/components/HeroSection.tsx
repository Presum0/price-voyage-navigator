
import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
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
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
    </section>
  );
};
