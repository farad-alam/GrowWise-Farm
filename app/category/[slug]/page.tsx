import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock } from 'lucide-react';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';

// Map of category slugs to human-readable names (in a real app, this would come from a database)
const categoryNames: Record<string, string> = {
  'sustainable-farming': 'Sustainable Farming',
  'crop-management': 'Crop Management',
  'livestock-care': 'Livestock Care',
  'farm-technology': 'Farm Technology',
  'soil-health': 'Soil Health',
  'weather-climate': 'Weather & Climate',
};

// Mock data for articles
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
    },
    publishedAt: '2023-04-15T09:00:00Z',
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
  {
    id: '10',
    title: 'Carbon Sequestration: How Farmers Can Combat Climate Change',
    slug: 'carbon-sequestration-farming',
    excerpt: 'Learn how agricultural practices can help sequester carbon and mitigate climate change effects.',
    coverImage: 'https://images.pexels.com/photos/1366094/pexels-photo-1366094.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'James Wilson',
      slug: 'james-wilson',
    },
    publishedAt: '2023-03-18T11:45:00Z',
    readingTime: '9 min read',
  },
  {
    id: '11',
    title: 'Companion Planting for Natural Pest Control',
    slug: 'companion-planting-natural-pest-control',
    excerpt: 'Discover how strategic plant combinations can naturally deter pests and enhance crop health.',
    coverImage: 'https://images.pexels.com/photos/1253193/pexels-photo-1253193.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'Lisa Johnson',
      slug: 'lisa-johnson',
    },
    publishedAt: '2023-03-10T09:15:00Z',
    readingTime: '5 min read',
  },
  {
    id: '12',
    title: 'Permaculture Principles for Small-Scale Farming',
    slug: 'permaculture-principles-small-scale-farming',
    excerpt: 'Learn how to apply permaculture design principles to create sustainable and productive small farms.',
    coverImage: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg',
    category: 'Sustainable Farming',
    categorySlug: 'sustainable-farming',
    author: {
      name: 'David Miller',
      slug: 'david-miller',
    },
    publishedAt: '2023-03-05T14:30:00Z',
    readingTime: '8 min read',
  },
];

// Filter articles by category
const getArticlesByCategory = (categorySlug: string) => {
  return articles.filter(article => article.categorySlug === categorySlug);
};

// Generate static params for all category pages
export async function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({ slug }));
}

// Generate metadata for the category page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const categoryName = categoryNames[params.slug] || 'Category';
  
  return {
    title: `${categoryName} Articles`,
    description: `Explore our collection of articles on ${categoryName.toLowerCase()} techniques, innovations, and best practices for modern farming.`,
    openGraph: {
      title: `${categoryName} Articles | GrowWise Farm Journal`,
      description: `Explore our collection of articles on ${categoryName.toLowerCase()} techniques, innovations, and best practices for modern farming.`,
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug;
  const categoryName = categoryNames[categorySlug] || 'Category';
  const categoryArticles = getArticlesByCategory(categorySlug);
  
  const breadcrumbsItems = [
    { label: 'Blog', href: '/blog' },
    { label: categoryName, href: `/category/${categorySlug}`, isCurrent: true },
  ];

  // Generate category descriptions based on slug
  const descriptions: Record<string, string> = {
    'sustainable-farming': 'Explore sustainable farming practices that help preserve natural resources, minimize environmental impact, and maintain long-term agricultural productivity.',
    'crop-management': 'Discover effective crop management techniques to optimize growth, yield, and quality while minimizing resource use and environmental impact.',
    'livestock-care': 'Learn about humane and efficient livestock care practices that promote animal health, welfare, and productivity.',
    'farm-technology': 'Stay updated on the latest agricultural technologies and innovations that are transforming modern farming operations.',
    'soil-health': 'Understand the importance of soil health and learn techniques to maintain and improve soil fertility, structure, and biological activity.',
    'weather-climate': 'Get insights on weather patterns, climate change impacts on agriculture, and adaptation strategies for farmers.',
  };

  const categoryDescription = descriptions[categorySlug] || '';

  return (
    <div className="pt-8 bg-[#FCFAF5]">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbsItems} />
        
        <div className="max-w-4xl mx-auto pb-16">
          <header className="text-center mb-12">
            <Badge 
              className="mb-4 inline-flex bg-[#7CB518] hover:bg-[#7CB518]/90"
            >
              Category
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2A3D27] mb-4">
              {categoryName}
            </h1>
            {categoryDescription && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {categoryDescription}
              </p>
            )}
          </header>
          
          <div className="space-y-12">
            {categoryArticles.map((article) => (
              <article 
                key={article.id}
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <Link 
                  href={`/blog/${article.slug}`}
                  className="md:w-2/5 relative h-[240px] md:h-auto overflow-hidden"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </Link>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="mb-auto">
                    <Link href={`/blog/${article.slug}`}>
                      <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#4B7F52] transition">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={formatDateForSEO(article.publishedAt)}>
                        {formatDate(article.publishedAt)}
                      </time>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readingTime}</span>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Button 
                        variant="outline" 
                        className="text-[#4B7F52] border-[#4B7F52] hover:bg-[#4B7F52] hover:text-white transition-colors"
                      >
                        Read Article
                      </Button>
                    </Link>
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
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}