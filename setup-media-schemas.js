import { Client } from '@hygraph/management-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// We need to use the Management API endpoint for the SDK, not the Content API endpoint.
// But earlier the user said NEXT_PUBLIC_HYGRAPH_ENDPOINT was the management endpoint before I changed it.
// The management endpoint is https://management-ap-south-1.hygraph.com/graphql/environments/master
// Or we can just use the project ID and let the SDK handle it. Actually, wait. I can construct the endpoint.
// But in setup-hygraph-others.js I used: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master' 
// and it succeeded successfully. So I will use that same endpoint because Hygraph allows management SDK to target it.

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating Photo model...");
    client.createModel({ apiId: 'Photo', apiIdPlural: 'Photos', displayName: 'Photo Gallery' });
    client.createSimpleField({ apiId: 'title', displayName: 'Title', type: 'STRING', modelApiId: 'Photo' });
    client.createSimpleField({ apiId: 'category', displayName: 'Category', type: 'STRING', modelApiId: 'Photo' });
    client.createRelationalField({ apiId: 'image', displayName: 'Image', type: 'ASSET', modelApiId: 'Photo', reverseField: { apiId: 'photosImage', displayName: 'Photo Gallery', modelApiId: 'Asset' }});

    console.log("Creating Video model...");
    client.createModel({ apiId: 'Video', apiIdPlural: 'Videos', displayName: 'Video Gallery' });
    client.createSimpleField({ apiId: 'title', displayName: 'Title', type: 'STRING', modelApiId: 'Video' });
    client.createSimpleField({ apiId: 'description', displayName: 'Description', type: 'STRING', modelApiId: 'Video' });
    client.createSimpleField({ apiId: 'category', displayName: 'Category', type: 'STRING', modelApiId: 'Video' });
    client.createSimpleField({ apiId: 'videoUrl', displayName: 'Video URL', type: 'STRING', modelApiId: 'Video' });
    client.createRelationalField({ apiId: 'thumbnail', displayName: 'Thumbnail', type: 'ASSET', modelApiId: 'Video', reverseField: { apiId: 'videosThumbnail', displayName: 'Video Gallery', modelApiId: 'Asset' }});

    console.log("Running migration...");
    const res = await client.run(true);
    console.log("Migration result:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("Error creating schema:");
    if (err.message) {
      console.error(err.message);
    }
  }
}

main();
