
import { ShoppingCart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockData";

export const BestDealSection = () => {
  const bestDealProduct = [...mockProducts].sort((a, b) => 
    (a.price + a.shipping + a.tax) - (b.price + b.shipping + b.tax)
  )[0];

  return (
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
  );
};
