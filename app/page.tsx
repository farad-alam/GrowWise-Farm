import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';

import FeaturedArticles from '@/components/home/FeaturedArticles';
import CategoryNavigation from '@/components/navigation/CategoryNavigation';
import NewsletterSignup from '@/components/forms/NewsletterSignup';
import { Button } from '@/components/ui/button';
import RecentArticles from '@/components/home/RecentArticles';

export const metadata: Metadata = {
  title: 'GrowWise Farm Journal - Sustainable Farming Practices & Agricultural Insights',
  description: 'Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations to help your farm thrive.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growwisefarm.com',
    title: 'GrowWise Farm Journal - Sustainable Farming Practices & Agricultural Insights',
    description: 'Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations to help your farm thrive.',
    siteName: 'GrowWise Farm Journal',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
          alt="Sustainable farming landscape with crops at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            <span className="text-[#7CB518]">GrowWise</span> Farm Journal
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Sustainable farming insights, practical tips, and agricultural
            innovations for the modern farmer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#4B7F52] hover:bg-[#3A6A3D] text-white"
            >
              <Link href="/blog" className="flex items-center">
                Read Latest Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/category/sustainable-farming">
                Explore Sustainable Practices
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-grow bg-[#FCFAF5]">
        {/* Category Navigation */}
        <section className="py-8 border-b border-[#E8E0D0]">
          <div className="container mx-auto px-4">
            <CategoryNavigation />
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-serif font-bold text-[#2A3D27]">
                Featured Articles
              </h2>
              <Link
                href="/blog"
                className="text-[#4B7F52] hover:text-[#3A6A3D] font-medium flex items-center"
              >
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <FeaturedArticles />
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 bg-[#E8E0D0]/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-[#2A3D27] mb-10 text-center">
              Popular Farming Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "Sustainable Farming",
                  slug: "sustainable-farming",
                  image:
                    "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
                },
                {
                  title: "Crop Management",
                  slug: "crop-management",
                  image:
                    "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
                },
                {
                  title: "Livestock Care",
                  slug: "livestock-care",
                  image:
                    "https://images.pexels.com/photos/162801/cows-dairy-cows-milk-food-162801.jpeg",
                },
                {
                  title: "Farm Technology",
                  slug: "farm-technology",
                  image:
                    "https://images.pexels.com/photos/5980594/pexels-photo-5980594.jpeg",
                },
              ].map((topic) => (
                // <Link
                //   key={topic.slug}
                //   href={`/category/${topic.slug}`}
                //   className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
                // >
                  <div className="relative h-40 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300 z-10" />
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <Link key={topic.slug} href={`/category/${topic.slug}`}>
                        <h3 className="text-white text-xl font-medium text-center px-2">
                          {topic.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                // </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-[#2A3D27] mb-10">
              Recent Articles
            </h2>
            <RecentArticles />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#2A3D27] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Stay Updated with Farming Insights
              </h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter and receive the latest farming tips,
                seasonal guides, and exclusive content directly to your inbox.
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}