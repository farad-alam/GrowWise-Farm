import React from "react";
// import fetchPostBySlug from "../../../lib/contentful/fetchPostBySlug";
import { fetchPostBySlug } from "@/lib/contentful/fetchPostBySlug";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function postDetailsPage({ params }) {
  const { slug } = params
  const post = await fetchPostBySlug(slug)
//   console.log(postDetais);

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* Thumbnail */}
      {post.thumbnail?.url && (
        <img
          src={post.thumbnail.url}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl shadow mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold text-green-800 mb-2 leading-tight">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="text-sm text-gray-600 mb-4">
        By{" "}
        <span className="font-medium text-green-700">{post.author?.name}</span>{" "}
        in <span className="italic">{post.categories?.name}</span> on{" "}
        {new Date(post.published).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      {/* Content */}
      <div className="prose prose-green max-w-none text-gray-800">
        {documentToReactComponents(post.postDescription?.json)}
      </div>
    </article>
  );
}

export default postDetailsPage;
