
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-violet-300 animate-pulse-slow"></div>
              <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-primary" />
              </div>
            </div>
            <span className="font-bold text-xl hidden md:inline-block">
              GloPrice
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/trending" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Trending
            </Link>
            <Link to="/categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Categories
            </Link>
            <Link to="/deals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Deals
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4 flex-1 mx-6">
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-auto relative">
            <Input 
              type="search" 
              placeholder="Search for products..." 
              className="pr-10 focus-visible:ring-primary"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden transition-opacity",
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 z-50 w-3/4 bg-background p-6 shadow-lg transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-violet-300 animate-pulse-slow"></div>
                <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                </div>
              </div>
              <span className="font-bold text-xl">GloPrice</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mb-6">
            <form onSubmit={handleSearch} className="relative">
              <Input 
                type="search" 
                placeholder="Search for products..." 
                className="pr-10"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <nav className="space-y-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/trending" 
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              to="/categories" 
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/deals" 
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
