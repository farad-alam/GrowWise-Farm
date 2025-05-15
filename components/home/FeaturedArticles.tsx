import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/date-utils';

// Mock data - in a real application this would come from an API or CMS
const featuredArticles = [
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
  }
];

export default function FeaturedArticles() {
  // Main featured article (first in the array)
  const mainFeature = featuredArticles[0];
  // Secondary featured articles
  const secondaryFeatures = featuredArticles.slice(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main Featured Article */}
      <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white h-[600px]">
        {/* <Link href={`/blog/${mainFeature.slug}`}>
          <div className="relative h-[320px]">
            <Image
              src={mainFeature.coverImage}
              alt={mainFeature.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Badge 
                className="bg-[#7CB518] hover:bg-[#7CB518]/90"
              >
                <Link href={`/category/${mainFeature.categorySlug}`}>
                  {mainFeature.category}
                </Link>
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#4B7F52] transition-colors">
              {mainFeature.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {mainFeature.excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(mainFeature.publishedAt)}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{mainFeature.readingTime}</span>
            </div>
            <div className="flex items-center">
              <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={mainFeature.author.avatar}
                  alt={mainFeature.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Link 
                href={`/author/${mainFeature.author.slug}`}
                className="text-sm font-medium hover:text-[#4B7F52] transition"
              >
                {mainFeature.author.name}
              </Link>
            </div>
          </div>
        </Link> */}

        <div className="group">
          {/* Category Badge - Outside the main Link */}
          <div className="absolute bottom-4 left-4 z-10">
            <Link href={`/category/${mainFeature.categorySlug}`}>
              <Badge className="bg-[#7CB518] hover:bg-[#7CB518]/90">
                {mainFeature.category}
              </Badge>
            </Link>
          </div>

          {/* Main content Link */}
          <Link href={`/blog/${mainFeature.slug}`}>
            <div className="relative h-[320px]">
              <Image
                src={mainFeature.coverImage}
                alt={mainFeature.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#4B7F52] transition-colors">
                {mainFeature.title}
              </h3>
              <p className="text-gray-600 mb-4">{mainFeature.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(mainFeature.publishedAt)}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{mainFeature.readingTime}</span>
              </div>
              <div className="flex items-center">
                <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                  <Image
                    src={mainFeature.author.avatar}
                    alt={mainFeature.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Extract the author link to outside */}
                <span className="text-sm font-medium">
                  {mainFeature.author.name}
                </span>
              </div>
            </div>
          </Link>

          {/* Author link - Outside the main Link */}
          <div className="absolute bottom-6 left-[42px]">
            <Link
              href={`/author/${mainFeature.author.slug}`}
              className="text-sm font-medium hover:text-[#4B7F52] transition"
            >
              {mainFeature.author.name}
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Featured Articles */}
      <div className="grid grid-cols-1 md:grid-rows-2 gap-8">
        {secondaryFeatures.map((article, index) => (
          <div
            key={article.id}
            className={cn(
              "group relative rounded-xl overflow-hidden shadow-lg bg-white",
              "flex flex-col md:flex-row"
            )}
          >
            <Link
              href={`/blog/${article.slug}`}
              className="w-full md:w-2/5 relative h-[200px] md:h-auto"
            >
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </Link>
            <div className="w-full md:w-3/5 p-5">
              <Badge className="mb-3 bg-[#7CB518] hover:bg-[#7CB518]/90">
                <Link href={`/category/${article.categorySlug}`}>
                  {article.category}
                </Link>
              </Badge>
              <Link href={`/blog/${article.slug}`}>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#4B7F52] transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center text-sm text-gray-500">
                <div className="flex items-center mr-4 mb-2">
                  <User className="h-4 w-4 mr-1" />
                  <Link
                    href={`/author/${article.author.slug}`}
                    className="hover:text-[#4B7F52] transition"
                  >
                    {article.author.name}
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(article.publishedAt)}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}