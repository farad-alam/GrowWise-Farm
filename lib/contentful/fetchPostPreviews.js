
export async function fetchPostPreviews() {
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
        query {
        postCollection(order: published_DESC){
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
            }
        }
    }`,
      }),
    }
  );

  const {data} = await res.json()

  return data.postCollection.items
}

export default fetchPostPreviews;

// query {
//     postCollection(order: published_DESC){
//         items {
//             title
//             slug
//             published
//             thumbnail {
//                 url
//             }
//             author {
//                 name
//             }
//             postDescription {
//                 json
//             }
//         }
//     }
// }
