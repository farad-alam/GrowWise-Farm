import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All Topics', slug: '/blog' },
  { name: 'Sustainable Farming', slug: '/category/sustainable-farming' },
  { name: 'Crop Management', slug: '/category/crop-management' },
  { name: 'Livestock Care', slug: '/category/livestock-care' },
  { name: 'Farm Technology', slug: '/category/farm-technology' },
  { name: 'Soil Health', slug: '/category/soil-health' },
  { name: 'Weather & Climate', slug: '/category/weather-climate' },
];

export default function CategoryNavigation() {
  return (
    <nav className="overflow-x-auto scrollbar-hide">
      <ul className="flex space-x-2 py-2 whitespace-nowrap">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={category.slug}
              className={cn(
                "inline-block px-4 py-2 rounded-full",
                "text-[#2A3D27] hover:bg-[#4B7F52] hover:text-white transition duration-200",
                "border border-[#E8E0D0] font-medium"
              )}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}