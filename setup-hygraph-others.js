import { Client } from '@hygraph/management-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating Project model...");
    client.createModel({ apiId: 'Project', apiIdPlural: 'Projects', displayName: 'Project' });
    client.createSimpleField({ apiId: 'title', displayName: 'Title', type: 'STRING', modelApiId: 'Project' });
    client.createSimpleField({ apiId: 'slug', displayName: 'Slug', type: 'STRING', modelApiId: 'Project', isUnique: true });
    client.createSimpleField({ apiId: 'projectStatus', displayName: 'Project Status', type: 'STRING', modelApiId: 'Project' });
    client.createSimpleField({ apiId: 'location', displayName: 'Location', type: 'STRING', modelApiId: 'Project' });
    client.createSimpleField({ apiId: 'shortDescription', displayName: 'Short Description', type: 'STRING', modelApiId: 'Project' });
    client.createSimpleField({ apiId: 'content', displayName: 'Content', type: 'RICHTEXT', modelApiId: 'Project' });
    client.createRelationalField({ apiId: 'featuredImage', displayName: 'Featured Image', type: 'ASSET', modelApiId: 'Project', reverseField: { apiId: 'projectsFeaturedImage', displayName: 'Project (Featured)', modelApiId: 'Asset' }});
    client.createRelationalField({ apiId: 'gallery', displayName: 'Gallery', type: 'ASSET', modelApiId: 'Project', isList: true, reverseField: { apiId: 'projectsGallery', displayName: 'Project (Gallery)', modelApiId: 'Asset' }});

    console.log("Creating NewsArticle model...");
    client.createModel({ apiId: 'NewsArticle', apiIdPlural: 'NewsArticles', displayName: 'News Article' });
    client.createSimpleField({ apiId: 'title', displayName: 'Title', type: 'STRING', modelApiId: 'NewsArticle' });
    client.createSimpleField({ apiId: 'slug', displayName: 'Slug', type: 'STRING', modelApiId: 'NewsArticle', isUnique: true });
    client.createSimpleField({ apiId: 'date', displayName: 'Date', type: 'DATE', modelApiId: 'NewsArticle' });
    client.createSimpleField({ apiId: 'excerpt', displayName: 'Excerpt', type: 'STRING', modelApiId: 'NewsArticle' });
    client.createSimpleField({ apiId: 'content', displayName: 'Content', type: 'RICHTEXT', modelApiId: 'NewsArticle' });
    client.createRelationalField({ apiId: 'featuredImage', displayName: 'Featured Image', type: 'ASSET', modelApiId: 'NewsArticle', reverseField: { apiId: 'newsArticlesFeaturedImage', displayName: 'News Articles', modelApiId: 'Asset' }});

    console.log("Creating Career model...");
    client.createModel({ apiId: 'Career', apiIdPlural: 'Careers', displayName: 'Career / Job Opening' });
    client.createSimpleField({ apiId: 'jobTitle', displayName: 'Job Title', type: 'STRING', modelApiId: 'Career' });
    client.createSimpleField({ apiId: 'department', displayName: 'Department', type: 'STRING', modelApiId: 'Career' });
    client.createSimpleField({ apiId: 'location', displayName: 'Location', type: 'STRING', modelApiId: 'Career' });
    client.createSimpleField({ apiId: 'description', displayName: 'Description', type: 'RICHTEXT', modelApiId: 'Career' });
    client.createSimpleField({ apiId: 'isActive', displayName: 'Is Active', type: 'BOOLEAN', modelApiId: 'Career' });

    console.log("Creating Award model...");
    client.createModel({ apiId: 'Award', apiIdPlural: 'Awards', displayName: 'Award' });
    client.createSimpleField({ apiId: 'title', displayName: 'Title', type: 'STRING', modelApiId: 'Award' });
    client.createSimpleField({ apiId: 'year', displayName: 'Year', type: 'STRING', modelApiId: 'Award' });
    client.createSimpleField({ apiId: 'description', displayName: 'Description', type: 'STRING', modelApiId: 'Award' });
    client.createRelationalField({ apiId: 'image', displayName: 'Image', type: 'ASSET', modelApiId: 'Award', reverseField: { apiId: 'awardsImage', displayName: 'Awards', modelApiId: 'Asset' }});

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
