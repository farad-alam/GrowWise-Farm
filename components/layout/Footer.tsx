import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram, Mail, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import FooterBrandCopyright from '../clientComponent/FooterBrandCopyright';

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Guides', href: '/guides' },
  { name: 'Research', href: '/research' },
  { name: 'Videos', href: '/videos' },
];

const categories = [
  { name: 'Sustainable Farming', href: '/category/sustainable-farming' },
  { name: 'Crop Management', href: '/category/crop-management' },
  { name: 'Livestock Care', href: '/category/livestock-care' },
  { name: 'Farm Technology', href: '/category/farm-technology' },
  { name: 'Soil Health', href: '/category/soil-health' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A3D27] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Leaf className="h-7 w-7 mr-2 text-[#7CB518]" />
              <span className="font-serif font-bold text-xl">
                <span className="text-[#7CB518]">GrowWise</span> Farm
              </span>
            </Link>
            <p className="text-white/80 mb-6">
              Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#7CB518] transition"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#7CB518] transition"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#7CB518] transition"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-[#7CB518] flex items-center transition"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-[#7CB518] flex items-center transition"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-[#7CB518] flex items-center transition"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="border-[#7CB518] text-[#7CB518] hover:bg-[#7CB518] hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-white/20" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
          <FooterBrandCopyright/>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}