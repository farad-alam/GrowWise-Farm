import {client} from './contentFul'


async function getContentType() {
    const contentType = await client.getContentType("post");
    console.log(contentType);
  return contentType
}

export default getContentType