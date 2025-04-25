import { useState } from "react";
import { ExternalLink, Heart, LineChart, ShoppingCart, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PriceHistoryModal } from "@/components/PriceHistoryModal";
import { Product, Platform } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
  isBestDeal?: boolean;
}

export function ProductCard({ product, isBestDeal = false }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [showPriceHistory, setShowPriceHistory] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const getPlatformLogo = (platform: Platform) => {
    switch (platform) {
      case "amazon":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png";
      case "flipkart":
        return "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
      case "ebay":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png";
      default:
        return "https://via.placeholder.com/50x20";
    }
  };

  const handleBuyNow = () => {
    if (!product.url) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Product link not available. Please try again later.",
      });
      return;
    }
    window.open(product.url, '_blank', 'noopener,noreferrer');
  };

  const totalCost = product.price + product.shipping + product.tax;
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const savingsPercentage = product.originalPrice ? (savings / product.originalPrice) * 100 : 0;

  return (
    <>
      <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isBestDeal ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
      }`}>
        <CardHeader className="p-0 relative">
          {isBestDeal && (
            <div className="absolute top-2 left-2 z-10 animate-pulse">
              <Badge variant="default" className="bg-primary font-semibold">
                Best Deal
              </Badge>
            </div>
          )}
          
          {savings > 0 && (
            <div className="absolute top-2 right-12 z-10">
              <Badge variant="secondary" className="bg-green-500/10 text-green-500 dark:bg-green-500/20">
                Save {savingsPercentage.toFixed(0)}%
              </Badge>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
            />
            <div className="absolute bottom-2 left-2">
              <div className="h-6 flex items-center bg-background/80 backdrop-blur-sm rounded px-2 shadow-sm">
                <img 
                  src={getPlatformLogo(product.platform)}
                  alt={product.platform}
                  className="h-3.5 w-auto"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="mb-2 line-clamp-2 h-12">
            <h3 className="font-medium text-sm">{product.name}</h3>
          </div>
          
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold">${totalCost.toFixed(2)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-muted-foreground line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center justify-between">
                <span>Shipping:</span>
                <span>{product.shipping > 0 ? `$${product.shipping.toFixed(2)}` : 'Free'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax:</span>
                <span>${product.tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between font-medium border-t pt-1 mt-1">
                <span>Total:</span>
                <span>${(product.price + product.shipping + product.tax).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex flex-col gap-2">
          <Button 
            className="w-full gap-2 group-hover:scale-105 transition-transform" 
            onClick={handleBuyNow}
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
            <ExternalLink className="h-3 w-3 ml-auto" />
          </Button>
          
          <div className="flex gap-2 w-full">
            <Button 
              variant="outline" 
              className="flex-1 text-xs"
              onClick={() => setShowPriceHistory(true)}
            >
              <LineChart className="h-3.5 w-3.5 mr-1" /> Price History
            </Button>
            <Button variant="outline" className="flex-1 text-xs">
              <Tag className="h-3.5 w-3.5 mr-1" /> Set Alert
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <PriceHistoryModal
        isOpen={showPriceHistory}
        onClose={() => setShowPriceHistory(false)}
        product={product}
      />
    </>
  );
}
