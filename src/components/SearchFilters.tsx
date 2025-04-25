
import { useState } from "react";
import { Check, ChevronDown, Filter, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Platform } from "@/types/product";

interface PriceRange {
  min: number;
  max: number;
}

interface SearchFiltersProps {
  onFilterChange: (filters: {
    priceRange: PriceRange;
    platforms: Platform[];
    sortBy: string;
  }) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 2000 });
  const [platforms, setPlatforms] = useState<Platform[]>(["amazon", "flipkart", "ebay"]);
  const [sortBy, setSortBy] = useState<string>("relevance");

  const handlePriceRangeChange = (values: number[]) => {
    const newPriceRange = { min: values[0], max: values[1] };
    setPriceRange(newPriceRange);
    onFilterChange({ priceRange: newPriceRange, platforms, sortBy });
  };

  const handlePlatformToggle = (platform: Platform) => {
    const newPlatforms = platforms.includes(platform)
      ? platforms.filter((p) => p !== platform)
      : [...platforms, platform];
    
    setPlatforms(newPlatforms);
    onFilterChange({ priceRange, platforms: newPlatforms, sortBy });
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    onFilterChange({ priceRange, platforms, sortBy: newSortBy });
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case "price_asc":
        return "Price: Low to High";
      case "price_desc":
        return "Price: High to Low";
      case "total_asc":
        return "Total Cost: Low to High";
      case "relevance":
      default:
        return "Relevance";
    }
  };

  return (
    <div className="bg-card rounded-xl p-4 mb-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filters
        </h3>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs"
          onClick={() => {
            setPriceRange({ min: 0, max: 2000 });
            setPlatforms(["amazon", "flipkart", "ebay"]);
            setSortBy("relevance");
            onFilterChange({
              priceRange: { min: 0, max: 2000 },
              platforms: ["amazon", "flipkart", "ebay"],
              sortBy: "relevance",
            });
          }}
        >
          Reset All
        </Button>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm">Price Range</h4>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>${priceRange.min}</span>
            <span>-</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
        <Slider
          defaultValue={[priceRange.min, priceRange.max]}
          min={0}
          max={2000}
          step={10}
          minStepsBetweenThumbs={1}
          onValueChange={handlePriceRangeChange}
          className="py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm mb-2">Platforms</h4>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={platforms.includes("amazon") ? "default" : "outline"}
              className={`text-xs ${platforms.includes("amazon") ? "" : "border-dashed"}`}
              onClick={() => handlePlatformToggle("amazon")}
            >
              {platforms.includes("amazon") && <Check className="mr-1 h-3 w-3" />}
              Amazon
            </Button>
            <Button
              size="sm"
              variant={platforms.includes("flipkart") ? "default" : "outline"}
              className={`text-xs ${platforms.includes("flipkart") ? "" : "border-dashed"}`}
              onClick={() => handlePlatformToggle("flipkart")}
            >
              {platforms.includes("flipkart") && <Check className="mr-1 h-3 w-3" />}
              Flipkart
            </Button>
            <Button
              size="sm"
              variant={platforms.includes("ebay") ? "default" : "outline"}
              className={`text-xs ${platforms.includes("ebay") ? "" : "border-dashed"}`}
              onClick={() => handlePlatformToggle("ebay")}
            >
              {platforms.includes("ebay") && <Check className="mr-1 h-3 w-3" />}
              eBay
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm mb-2">Sort By</h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <SortDesc className="h-4 w-4" />
                  <span>{getSortLabel()}</span>
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleSortChange("relevance")}>
                  <Check 
                    className={`mr-2 h-4 w-4 ${sortBy === "relevance" ? "opacity-100" : "opacity-0"}`} 
                  />
                  Relevance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("price_asc")}>
                  <Check 
                    className={`mr-2 h-4 w-4 ${sortBy === "price_asc" ? "opacity-100" : "opacity-0"}`} 
                  />
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("price_desc")}>
                  <Check 
                    className={`mr-2 h-4 w-4 ${sortBy === "price_desc" ? "opacity-100" : "opacity-0"}`} 
                  />
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("total_asc")}>
                  <Check 
                    className={`mr-2 h-4 w-4 ${sortBy === "total_asc" ? "opacity-100" : "opacity-0"}`} 
                  />
                  Total Cost: Low to High
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
