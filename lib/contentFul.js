// import contentful from 'contentful'
import * as contentful from "contentful";


export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACEID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_CONTENT_DELYVARY_ACCESS_TOKEN,
});

