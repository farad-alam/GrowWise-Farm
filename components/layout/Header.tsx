'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Leaf
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  { name: 'Sustainable Farming', slug: 'sustainable-farming' },
  { name: 'Crop Management', slug: 'crop-management' },
  { name: 'Livestock Care', slug: 'livestock-care' },
  { name: 'Farm Technology', slug: 'farm-technology' },
  { name: 'Soil Health', slug: 'soil-health' },
  { name: 'Weather & Climate', slug: 'weather-climate' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white text-[#2A3D27] shadow-md py-3" 
          : "bg-transparent text-white py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Leaf 
              className={cn(
                "h-8 w-8 mr-2 transition-colors",
                isScrolled ? "text-[#4B7F52]" : "text-[#7CB518]"
              )} 
            />
            <span className="font-serif font-bold text-2xl hidden sm:inline-block">
              <span className={isScrolled ? "text-[#7CB518]" : "text-[#7CB518]"}>GrowWise</span> Farm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={cn(
                "px-3 py-2 rounded-md hover:bg-white/10 transition",
                isScrolled && "hover:bg-[#4B7F52]/10"
              )}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger 
                className={cn(
                  "flex items-center px-3 py-2 rounded-md hover:bg-white/10 transition",
                  isScrolled && "hover:bg-[#4B7F52]/10"
                )}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.slug} asChild>
                    <Link href={`/category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/blog" 
              className={cn(
                "px-3 py-2 rounded-md hover:bg-white/10 transition",
                isScrolled && "hover:bg-[#4B7F52]/10"
              )}
            >
              All Articles
            </Link>
            
            <Link 
              href="/about" 
              className={cn(
                "px-3 py-2 rounded-md hover:bg-white/10 transition",
                isScrolled && "hover:bg-[#4B7F52]/10"
              )}
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className={cn(
                "px-3 py-2 rounded-md hover:bg-white/10 transition",
                isScrolled && "hover:bg-[#4B7F52]/10"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "mr-2",
                isScrolled ? "hover:bg-[#4B7F52]/10" : "hover:bg-white/10"
              )}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isScrolled ? "hover:bg-[#4B7F52]/10" : "hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Leaf className="h-8 w-8 mr-2 text-[#4B7F52]" />
                <span className="font-serif font-bold text-2xl">
                  <span className="text-[#7CB518]">GrowWise</span> Farm
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 text-[#2A3D27]" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="px-3 py-3 text-lg font-medium text-[#2A3D27] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-3 text-lg font-medium text-[#2A3D27] border-b border-gray-100">
                <p className="mb-2">Categories</p>
                <div className="ml-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="text-base text-[#4B7F52]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                href="/blog" 
                className="px-3 py-3 text-lg font-medium text-[#2A3D27] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Articles
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-3 text-lg font-medium text-[#2A3D27] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-3 text-lg font-medium text-[#2A3D27] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Button className="w-full bg-[#4B7F52] hover:bg-[#3A6A3D]">
                  <Search className="mr-2 h-4 w-4" />
                  Search Articles
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}