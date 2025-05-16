import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';
import CategoryNavigation from '@/components/navigation/CategoryNavigation';

// Mock data - this would come from a CMS or database in a real application
const articles = [
  {
    id: '1',
    title: 'Sustainable Crop Rotation Techniques for Improved Soil Health',
    slug: 'sustainable-crop-rotation-techniques',
    excerpt: 'Discover how implementing strategic crop rotation can rejuvenate soil, reduce pest pressure, and increase yields sustainably.',
    coverImage: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'Emily Johnson',
      slug: 'emily-johnson',
      avatar: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg'
    },
    publishedAt: '2023-04-15T09:00:00Z',
    readingTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Modern Irrigation Systems That Conserve Water While Maximizing Yield',
    slug: 'modern-irrigation-systems',
    excerpt: 'Explore cutting-edge irrigation technologies that help farmers reduce water usage while maintaining optimal crop growth.',
    coverImage: 'https://images.pexels.com/photos/259302/pexels-photo-259302.jpeg',
    category: 'Farm Technology',
    categorySlug: 'farm-technology',
    author: {
      name: 'Michael Chen',
      slug: 'michael-chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    publishedAt: '2023-05-02T10:30:00Z',
    readingTime: '6 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'Regenerative Grazing: Transforming Livestock Management',
    slug: 'regenerative-grazing-techniques',
    excerpt: 'Learn how regenerative grazing practices can improve pasture health, increase carbon sequestration, and enhance livestock wellness.',
    coverImage: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg',
    category: 'Livestock Care',
    categorySlug: 'livestock-care',
    author: {
      name: 'Sarah Williams',
      slug: 'sarah-williams',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    publishedAt: '2023-04-28T08:15:00Z',
    readingTime: '10 min read',
    featured: true,
  },
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
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
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
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
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
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
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
      avatar: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg'
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
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
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
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    publishedAt: '2023-03-27T13:30:00Z',
    readingTime: '7 min read',
  },
];

export const metadata: Metadata = {
  title: "Blog | GrowWise Farm Journal",
  description:
    "Explore articles on sustainable farming, crop management, livestock care, and agricultural innovations.",
  openGraph: {
    title: "Blog | GrowWise Farm Journal",
    description:
      "Explore articles on sustainable farming, crop management, livestock care, and agricultural innovations.",
    url: "https://grow-wise-farm.netlify.app/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-8 bg-[#FCFAF5]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto pb-16">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-[#2A3D27] mb-4">
              Farm Journal Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles on sustainable farming, crop management, livestock care, and agricultural innovations.
            </p>
          </header>
          
          <div className="mb-8">
            <CategoryNavigation />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col h-full"
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
                    <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-[#4B7F52] transition-colors">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Link 
                        href={`/author/${article.author.slug}`}
                        className="text-sm font-medium hover:text-[#4B7F52] transition"
                      >
                        {article.author.name}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time dateTime={formatDateForSEO(article.publishedAt)}>
                          {formatDate(article.publishedAt)}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="border-[#4B7F52] text-[#4B7F52] hover:bg-[#4B7F52] hover:text-white"
                disabled
              >
                Previous
              </Button>
              <Button 
                variant="outline" 
                className="border-[#4B7F52] bg-[#4B7F52] text-white hover:bg-[#4B7F52]/90"
              >
                1
              </Button>
              <Button 
                variant="outline" 
                className="border-[#4B7F52] text-[#4B7F52] hover:bg-[#4B7F52] hover:text-white"
              >
                2
              </Button>
              <Button 
                variant="outline" 
                className="border-[#4B7F52] text-[#4B7F52] hover:bg-[#4B7F52] hover:text-white"
              >
                3
              </Button>
              <Button 
                variant="outline" 
                className="border-[#4B7F52] text-[#4B7F52] hover:bg-[#4B7F52] hover:text-white"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}