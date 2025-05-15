import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock, Mail, Link as LinkIcon } from 'lucide-react';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';

// Mock data for author
const author = {
  name: 'Emily Johnson',
  slug: 'emily-johnson',
  avatar: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
  bio: 'Emily is an agricultural scientist specializing in sustainable farming practices with over 10 years of experience in both research and practical farm management.',
  role: 'Agricultural Scientist',
  location: 'Portland, Oregon',
  expertise: ['Sustainable Farming', 'Crop Rotation', 'Soil Health', 'Organic Certification'],
  email: 'emily@growwisefarm.com',
  website: 'https://emilyjohnson.com',
  articles: [
    {
      id: '1',
      title: 'Sustainable Crop Rotation Techniques for Improved Soil Health',
      slug: 'sustainable-crop-rotation-techniques',
      excerpt: 'Discover how implementing strategic crop rotation can rejuvenate soil, reduce pest pressure, and increase yields sustainably.',
      coverImage: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg',
      category: 'Sustainable Farming',
      categorySlug: 'sustainable-farming',
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
      publishedAt: '2023-04-02T16:20:00Z',
      readingTime: '6 min read',
    },
    {
      id: '13',
      title: 'Cover Crops: The Unsung Heroes of Sustainable Agriculture',
      slug: 'cover-crops-sustainable-agriculture',
      excerpt: 'Learn how cover crops improve soil health, reduce erosion, and contribute to climate change mitigation in farming systems.',
      coverImage: 'https://images.pexels.com/photos/2263936/pexels-photo-2263936.jpeg',
      category: 'Soil Health',
      categorySlug: 'soil-health',
      publishedAt: '2023-02-15T08:30:00Z',
      readingTime: '7 min read',
    },
  ],
};

// Generate SEO metadata for the author page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // In a real app, fetch the author data based on slug
  // const author = await getAuthorBySlug(params.slug);
  
  return {
    title: `${author.name} - Author at GrowWise Farm Journal`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - Agricultural Expert`,
      description: author.bio,
      type: 'profile',
      images: [
        {
          url: author.avatar,
          width: 800,
          height: 800,
          alt: author.name,
        },
      ],
    },
  };
}

// Generate JSON-LD structured data for the author
function AuthorJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    image: author.avatar,
    jobTitle: author.role,
    url: `https://growwisefarm.com/author/${author.slug}`,
    email: author.email,
    sameAs: [
      author.website,
      // Could add social profiles here
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch the author based on the slug
  // const author = await getAuthorBySlug(params.slug);
  
  const breadcrumbsItems = [
    { label: 'Authors', href: '/authors' },
    { label: author.name, href: `/author/${author.slug}`, isCurrent: true },
  ];

  return (
    <>
      <AuthorJsonLd />
      
      <div className="pt-8 bg-[#FCFAF5]">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbsItems} />
          
          <div className="max-w-4xl mx-auto pb-16">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl font-serif font-bold text-[#2A3D27] mb-2">
                      {author.name}
                    </h1>
                    <p className="text-lg text-[#4B7F52] mb-4">{author.role}</p>
                    <p className="text-gray-600 mb-6">{author.bio}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                      {author.expertise.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                      <Button 
                        className="bg-[#4B7F52] hover:bg-[#3A6A3D]"
                        asChild
                      >
                        <a href={`mailto:${author.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="border-[#4B7F52] text-[#4B7F52] hover:bg-[#4B7F52] hover:text-white"
                        asChild
                      >
                        <a href={author.website} target="_blank" rel="noopener noreferrer">
                          <LinkIcon className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-[#2A3D27] mb-6">
              Articles by {author.name}
            </h2>
            
            <div className="space-y-8">
              {author.articles.map((article) => (
                <article 
                  key={article.id}
                  className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="md:w-1/3 relative h-[200px] md:h-auto overflow-hidden"
                  >
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="md:w-2/3 p-6 flex flex-col">
                    <div className="mb-auto">
                      <Badge 
                        className="mb-3 bg-[#7CB518] hover:bg-[#7CB518]/90"
                      >
                        <Link href={`/category/${article.categorySlug}`}>
                          {article.category}
                        </Link>
                      </Badge>
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#4B7F52] transition">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
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
                          size="sm"
                          className="text-[#4B7F52] border-[#4B7F52] hover:bg-[#4B7F52] hover:text-white transition-colors"
                        >
                          Read
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}