
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockData";

export const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const bestDealProduct = [...mockProducts].sort((a, b) => 
    (a.price + a.shipping + a.tax) - (b.price + b.shipping + b.tax)
  )[0];

  return (
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
  );
};
