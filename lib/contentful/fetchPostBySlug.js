import React from 'react'


export async function fetchPostBySlug(slug) {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACEID}/environments/master`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_CONTENT_DELYVARY_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query GetPostBySlug($slug: String!){
          postCollection(where : {slug : $slug}, limit: 1){
              items {
                  title
                  slug
                  published
                  thumbnail {
                      url
                  }
                  author {
                      name
                  }
                  postDescription {
                      json
                  }
                    categories {
                        name
                    }
              }
          }
        }`,
        variables: {slug},
        }),
      }
    );
  
    const {data} = await res.json()
    // console.log(data);
  
    return data?.postCollection?.items?.[0] || null;
  }

export default fetchPostBySlug