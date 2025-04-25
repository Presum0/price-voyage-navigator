
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
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
  );
};
