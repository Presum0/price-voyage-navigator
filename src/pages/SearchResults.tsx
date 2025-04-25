
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SearchFilters } from "@/components/SearchFilters";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockData";
import { Platform, Product } from "@/types/product";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Find the best deal (product with lowest total cost)
  const bestDealProduct = filteredProducts.length > 0 
    ? [...filteredProducts].sort((a, b) => 
        (a.price + a.shipping + a.tax) - (b.price + b.shipping + b.tax)
      )[0]
    : null;

  // Simulate API call to search products
  useEffect(() => {
    setLoading(true);
    
    // Simulate network delay
    const timer = setTimeout(() => {
      // Filter mock products based on query
      const results = mockProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      
      setProducts(results);
      setFilteredProducts(results);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [query]);

  // Handle filter changes
  const handleFilterChange = ({ 
    priceRange, 
    platforms, 
    sortBy 
  }: { 
    priceRange: { min: number; max: number }; 
    platforms: Platform[]; 
    sortBy: string;
  }) => {
    let filtered = [...products].filter(product => 
      // Price range filter
      product.price >= priceRange.min && 
      product.price <= priceRange.max &&
      // Platform filter
      platforms.includes(product.platform)
    );
    
    // Apply sorting
    switch (sortBy) {
      case "price_asc":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "total_asc":
        filtered = filtered.sort((a, b) => 
          (a.price + a.shipping + a.tax) - (b.price + b.shipping + b.tax)
        );
        break;
      case "relevance":
      default:
        // No sorting for relevance (use default order)
        break;
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-secondary/20">
        <div className="container py-6 md:py-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {loading ? 'Searching...' : `Search results for "${query}"`}
            </h1>
            {!loading && (
              <p className="text-muted-foreground">
                Found {filteredProducts.length} products across multiple platforms
              </p>
            )}
          </div>
          
          {/* Filters */}
          <SearchFilters onFilterChange={handleFilterChange} />
          
          {/* Results */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Searching across platforms...</p>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-card rounded-xl p-16 text-center">
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any products matching your search criteria.
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search for something else.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isBestDeal={bestDealProduct && product.id === bestDealProduct.id}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
