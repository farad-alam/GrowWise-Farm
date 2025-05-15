import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';
import { Button } from '@/components/ui/button';

// This would normally be fetched from a CMS or database
const article = {
  id: '1',
  title: 'Sustainable Crop Rotation Techniques for Improved Soil Health',
  slug: 'sustainable-crop-rotation-techniques',
  content: `
## Introduction

Crop rotation is one of the oldest and most effective agricultural practices, dating back thousands of years. By systematically changing the crops planted in a specific area over seasons or years, farmers can break pest cycles, enhance soil structure, and maintain fertility naturally.

This article explores modern approaches to crop rotation with a focus on sustainability and soil health improvement.

## Benefits of Strategic Crop Rotation

Implementing a well-designed crop rotation system offers numerous benefits:

1. **Disrupts Pest and Disease Cycles**: Different crops attract different pests. By rotating crops, you prevent the buildup of crop-specific pests and pathogens in the soil.

2. **Improves Soil Structure**: Different plant root systems interact with soil in various ways. Deep-rooted crops can break up compacted soil layers, while fibrous-rooted crops can enhance topsoil structure.

3. **Enhances Soil Fertility**: Legumes fix atmospheric nitrogen, enriching the soil naturally. Following nitrogen-demanding crops with legumes helps maintain soil fertility with less synthetic fertilizer.

4. **Reduces Erosion Risk**: Maintaining year-round soil coverage with appropriate rotation crops significantly decreases erosion from wind and water.

5. **Diversifies Farm Income**: Growing multiple crops through rotation provides income diversification and financial resilience against market fluctuations or crop failures.

## Essential Elements of a Sustainable Rotation Plan

### 1. Include Diversity in Plant Families

An effective rotation involves crops from different botanical families. For example:

- **Solanaceae**: Tomatoes, potatoes, peppers
- **Brassicaceae**: Cabbage, broccoli, radishes
- **Fabaceae**: Beans, peas, clover
- **Poaceae**: Corn, wheat, oats
- **Asteraceae**: Sunflower, lettuce, artichoke

By avoiding planting crops from the same family in succession, you prevent family-specific pests and diseases from becoming established.

### 2. Balance Nutrient Demands

Organize your rotation to balance crop nutrient demands:

- **Heavy Feeders**: Corn, tomatoes, cabbage
- **Moderate Feeders**: Carrots, cucumbers, squash
- **Light Feeders**: Beans, peas, herbs
- **Soil Builders**: Cover crops, green manures

A typical balanced sequence might be: heavy feeder → light feeder → soil builder → moderate feeder.

### 3. Incorporate Cover Crops Strategically

Cover crops are grown primarily to benefit the soil rather than for harvest. They play crucial roles in a sustainable rotation:

- **Winter Cover**: Cereal rye, winter wheat
- **Nitrogen Fixation**: Crimson clover, hairy vetch
- **Biofumigation**: Mustard crops
- **Soil Structure Improvement**: Tillage radish, oats

Timing the termination of cover crops is critical to maximize benefits without interfering with cash crop planting.

## Advanced Rotation Strategies

### Multispecies Cover Cropping

Rather than planting a single cover crop species, many farmers now use diverse mixtures containing:

- Grasses for organic matter and erosion control
- Legumes for nitrogen fixation
- Brassicas for weed suppression and deep tillage
- Broadleaves for diverse root architecture

These mixes provide multiple benefits simultaneously and create diverse habitats for beneficial soil organisms.

### Relay Cropping

Relay cropping involves planting a second crop into a standing crop before harvest. This extends the growing season and increases yearly biomass production. For example:

- Seeding winter wheat into standing soybeans
- Planting clover into standing corn
- Establishing winter peas into summer vegetables

This approach requires careful timing and sometimes specialized equipment but can significantly enhance rotation benefits.

## Customizing Rotations for Different Farm Systems

### Market Gardens and Small Farms

For intensive production on smaller acreage:

- Use shorter 3-4 year rotations
- Divide fields into multiple blocks
- Consider season extension in rotation planning
- Integrate quick-growing crops between main crops

### Row Crop Operations

For larger-scale grain and field crop operations:

- Design longer 5-7 year rotations
- Incorporate multi-year perennial phases
- Plan equipment needs across rotation crops
- Consider market contracts when selecting rotation crops

### Livestock Integration

Rotation planning changes when livestock are part of the farm system:

- Include grazing-friendly phases (e.g., perennial pasture)
- Plan for forage production needs
- Account for manure applications in nutrient budgeting
- Consider silage or haylage crops in the sequence

## Monitoring and Adjusting Rotations

Successful crop rotation requires ongoing observation and adaptation:

- **Soil Testing**: Regular testing reveals trends in organic matter, nutrient levels, and pH
- **Weed Monitoring**: Changes in weed pressure or species indicate rotation effects
- **Yield Documentation**: Track yields to identify crop sequences that perform best
- **Weather Adaptation**: Adjust plans based on seasonal conditions and climate trends

## Conclusion

Strategic crop rotation is not merely an ancient practice but a sophisticated modern tool for sustainable agriculture. By carefully designing rotations that balance plant families, nutrient demands, and soil-building phases, farmers can reduce external inputs, improve resilience to weather extremes, and maintain or enhance productivity over time.

The most effective rotation plans are not static but evolve as farmers observe outcomes, incorporate new knowledge, and adapt to changing environmental and market conditions.
  `,
  excerpt: 'Discover how implementing strategic crop rotation can rejuvenate soil, reduce pest pressure, and increase yields sustainably.',
  coverImage: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg',
  category: 'Sustainable Farming',
  categorySlug: 'sustainable-farming',
  author: {
    name: 'Emily Johnson',
    slug: 'emily-johnson',
    avatar: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
    bio: 'Emily is an agricultural scientist specializing in sustainable farming practices with over 10 years of experience in both research and practical farm management.',
  },
  publishedAt: '2023-04-15T09:00:00Z',
  updatedAt: '2023-04-17T14:30:00Z',
  readingTime: '8 min read',
  tags: ['crop rotation', 'soil health', 'sustainable farming', 'cover crops', 'regenerative agriculture'],
  related: [
    {
      id: '4',
      title: 'Maximizing Yield with Intercropping Strategies',
      slug: 'maximizing-yield-with-intercropping',
      coverImage: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
      category: 'Crop Management',
      categorySlug: 'crop-management',
      publishedAt: '2023-04-12T14:30:00Z',
    },
    {
      id: '5',
      title: 'Essential Soil Testing Methods for Every Farmer',
      slug: 'essential-soil-testing-methods',
      coverImage: 'https://images.pexels.com/photos/2227799/pexels-photo-2227799.jpeg',
      category: 'Soil Health',
      categorySlug: 'soil-health',
      publishedAt: '2023-04-08T11:45:00Z',
    },
    {
      id: '7',
      title: 'Organic Pest Management Strategies That Work',
      slug: 'organic-pest-management-strategies',
      coverImage: 'https://images.pexels.com/photos/105840/pexels-photo-105840.jpeg',
      category: 'Sustainable Farming',
      categorySlug: 'sustainable-farming',
      publishedAt: '2023-04-02T16:20:00Z',
    },
  ],
};

// Generate SEO metadata for the article page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // In a real app, fetch the article data based on slug
  // const article = await getArticleBySlug(params.slug);

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [`https://growwisefarm.com/author/${article.author.slug}`],
      tags: article.tags,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

// Generate JSON-LD structured data for the article
function ArticleJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `https://growwisefarm.com/author/${article.author.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GrowWise Farm Journal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://growwisefarm.com/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://growwisefarm.com/blog/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function processContent(content: string) {
  // Convert markdown to HTML (simplified)
  // In a real app, use a proper markdown parser like remark or marked
  
  // Process headings
  let processedContent = content
    .replace(/## (.*)/g, '<h2 class="text-2xl font-serif font-bold mt-8 mb-4">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="text-xl font-serif font-bold mt-6 mb-3">$1</h3>')
    .replace(/#### (.*)/g, '<h4 class="text-lg font-serif font-bold mt-5 mb-2">$1</h4>');
  
  // Process paragraphs
  processedContent = processedContent
    .replace(/(?:^|\n)(?!<h)([^\n]+)(?:\n|$)/g, '<p class="mb-4 leading-relaxed">$1</p>');
  
  // Process lists
  processedContent = processedContent
    .replace(/^\d+\. (.*)$/gm, '<li class="ml-6 mb-2">$1</li>')
    .replace(/^- (.*)$/gm, '<li class="ml-6 mb-2">$1</li>');
    
  // Wrap lists
  processedContent = processedContent
    .replace(/<li class="ml-6 mb-2">\*\*([^:]+):\*\* (.*)<\/li>/g, 
      '<li class="ml-6 mb-2"><strong>$1:</strong> $2</li>');
  
  // Replace ** with strong tags
  processedContent = processedContent
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  return processedContent;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real app, fetch the article based on the slug
  // const article = await getArticleBySlug(params.slug);
  
  const breadcrumbsItems = [
    { label: 'Blog', href: '/blog' },
    { label: article.category, href: `/category/${article.categorySlug}` },
    { label: article.title, href: `/blog/${article.slug}`, isCurrent: true },
  ];

  // Format the publish date for display and SEO
  const publishDate = formatDate(article.publishedAt);
  const publishDateSEO = formatDateForSEO(article.publishedAt);

  return (
    <>
      <ArticleJsonLd />
      
      <div className="pt-8 bg-[#FCFAF5]">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbsItems} />
          
          <article className="max-w-4xl mx-auto pb-16">
            {/* Article Header */}
            <header className="mb-8">
              <Badge 
                className="mb-4 bg-[#7CB518] hover:bg-[#7CB518]/90"
              >
                <Link href={`/category/${article.categorySlug}`}>
                  {article.category}
                </Link>
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2A3D27] mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link 
                      href={`/author/${article.author.slug}`}
                      className="font-medium hover:text-[#4B7F52] transition"
                    >
                      {article.author.name}
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={publishDateSEO}>{publishDate}</time>
                </div>
                
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </header>
            
            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: processContent(article.content) }} />
            </div>
            
            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link key={tag} href={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-[#4B7F52]/10">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Share This Article</h2>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  asChild
                >
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://growwisefarm.com/blog/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  asChild
                >
                  <a 
                    href={`https://twitter.com/intent/tweet?url=https://growwisefarm.com/blog/${article.slug}&text=${article.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  asChild
                >
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://growwisefarm.com/blog/${article.slug}&title=${article.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link 
                    href={`/author/${article.author.slug}`}
                    className="text-xl font-serif font-bold hover:text-[#4B7F52] transition"
                  >
                    {article.author.name}
                  </Link>
                  <p className="text-gray-600 mt-1">{article.author.bio}</p>
                </div>
              </div>
            </div>
            
            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold text-[#2A3D27] mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {article.related.map((relatedArticle) => (
                  <div 
                    key={relatedArticle.id}
                    className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white"
                  >
                    <Link 
                      href={`/blog/${relatedArticle.slug}`}
                      className="relative block h-48 overflow-hidden"
                    >
                      <Image
                        src={relatedArticle.coverImage}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </Link>
                    <div className="p-4">
                      <Badge 
                        className="mb-2 bg-[#7CB518] hover:bg-[#7CB518]/90"
                      >
                        <Link href={`/category/${relatedArticle.categorySlug}`}>
                          {relatedArticle.category}
                        </Link>
                      </Badge>
                      <Link href={`/blog/${relatedArticle.slug}`}>
                        <h3 className="font-bold mb-2 group-hover:text-[#4B7F52] transition line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        <time dateTime={formatDateForSEO(relatedArticle.publishedAt)}>
                          {formatDate(relatedArticle.publishedAt)}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}