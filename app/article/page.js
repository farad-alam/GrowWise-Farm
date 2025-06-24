import React from "react";
import {fetchPostPreviews} from "../../lib/contentful/fetchPostPreviews";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";



const articlePage = async () => {
  const posts = await fetchPostPreviews();
  // console.log(posts);

  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Latest Farming Articles
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const plainText = documentToPlainTextString(
            post.postDescription?.json || {}
          );
          const previewText =
            plainText?.split(" ").slice(0, 30).join(" ") + "...";

          return (
            <div
              key={post.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border"
            >
              {post.thumbnail?.url && (
                <img
                  src={post.thumbnail.url}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-green-900">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  By {post.author?.name} on{" "}
                  {new Date(post.published).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-3 text-gray-700 text-sm">{previewText}</p>
                <Link
                  href={`/article/${post.slug}`}
                  className="inline-block mt-4 text-green-700 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default articlePage;
