import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/date-utils';

// Mock data - in a real application this would come from an API or CMS
const articles = [
  {
    id: '4',
    title: 'Maximizing Yield with Intercropping Strategies',
    slug: 'maximizing-yield-with-intercropping',
    excerpt: 'Learn how combining multiple crops in the same field can increase productivity and promote ecological balance.',
    coverImage: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
    category: 'Crop Management',
    categorySlug: 'crop-management',
    author: {
      name: 'David Miller',
      slug: 'david-miller',
    },
    publishedAt: '2023-04-12T14:30:00Z',
    readingTime: '7 min read',
  },
  {
    id: '5',
    title: 'Essential Soil Testing Methods for Every Farmer',
    slug: 'essential-soil-testing-methods',
    excerpt: 'Discover the importance of regular soil testing and learn about DIY and professional testing options to optimize your soil health.',
    coverImage: 'https://images.pexels.com/photos/2227799/pexels-photo-2227799.jpeg',
    category: 'Soil Health',
    categorySlug: 'soil-health',
    author: {
      name: 'Lisa Johnson',
      slug: 'lisa-johnson',
    },
    publishedAt: '2023-04-08T11:45:00Z',
    readingTime: '5 min read',
  },
  {
    id: '6',
    title: 'Smart Farming: IoT Applications in Agriculture',
    slug: 'smart-farming-iot-applications',
    excerpt: 'Explore how Internet of Things (IoT) technology is revolutionizing farming through automated monitoring and data-driven decisions.',
    coverImage: 'https://images.pexels.com/photos/2438210/pexels-photo-2438210.jpeg',
    category: 'Farm Technology',
    categorySlug: 'farm-technology',
    author: {
      name: 'Michael Chen',
      slug: 'michael-chen',
    },
    publishedAt: '2023-04-05T09:15:00Z',
    readingTime: '8 min read',
  },
  {
    id: '7',
    title: 'Organic Pest Management Strategies That Work',
    slug: 'organic-pest-management-strategies',
    excerpt: 'Discover effective organic methods to manage pests while maintaining ecological balance and avoiding harmful chemicals.',
    coverImage: 'https://images.pexels.com/photos/105840/pexels-photo-105840.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'Emily Johnson',
      slug: 'emily-johnson',
    },
    publishedAt: '2023-04-02T16:20:00Z',
    readingTime: '6 min read',
  },
  {
    id: '8',
    title: 'Climate-Resilient Crop Varieties for Changing Weather Patterns',
    slug: 'climate-resilient-crop-varieties',
    excerpt: 'Learn about new crop varieties bred to withstand extreme weather conditions while maintaining productivity.',
    coverImage: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg',
    category: 'Weather & Climate',
    categorySlug: 'weather-climate',
    author: {
      name: 'James Wilson',
      slug: 'james-wilson',
    },
    publishedAt: '2023-03-30T10:45:00Z',
    readingTime: '9 min read',
  },
  {
    id: '9',
    title: 'Efficient Water Management Techniques for Dry Regions',
    slug: 'efficient-water-management-techniques',
    excerpt: 'Explore sustainable approaches to water conservation and management in regions with limited water resources.',
    coverImage: 'https://images.pexels.com/photos/258173/pexels-photo-258173.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'Sarah Williams',
      slug: 'sarah-williams',
    },
    publishedAt: '2023-03-27T13:30:00Z',
    readingTime: '7 min read',
  },
];

export default function RecentArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div 
          key={article.id}
          className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full"
        >
          <Link 
            href={`/blog/${article.slug}`}
            className="relative h-[200px] overflow-hidden"
          >
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </Link>
          <div className="p-5 flex flex-col flex-grow">
            <div className="mb-3">
              <Badge 
                className="bg-[#7CB518] hover:bg-[#7CB518]/90"
              >
                <Link href={`/category/${article.categorySlug}`}>
                  {article.category}
                </Link>
              </Badge>
            </div>
            <Link href={`/blog/${article.slug}`}>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#4B7F52] transition-colors">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}