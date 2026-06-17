import { Client } from '@hygraph/management-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating HeroSlide model...");
    client.createModel({
      apiId: 'HeroSlide',
      apiIdPlural: 'HeroSlides',
      displayName: 'Hero Slide',
    });
    
    client.createSimpleField({
      apiId: 'title',
      displayName: 'Title',
      type: 'STRING',
      modelApiId: 'HeroSlide',
    });
    
    client.createSimpleField({
      apiId: 'badge',
      displayName: 'Badge',
      type: 'STRING',
      modelApiId: 'HeroSlide',
    });
    
    client.createSimpleField({
      apiId: 'description',
      displayName: 'Description',
      type: 'STRING',
      modelApiId: 'HeroSlide',
    });
    
    client.createSimpleField({
      apiId: 'link',
      displayName: 'Link',
      type: 'STRING',
      modelApiId: 'HeroSlide',
    });

    client.createRelationalField({
      apiId: 'image',
      displayName: 'Image',
      type: 'ASSET',
      modelApiId: 'HeroSlide',
      reverseField: {
        apiId: 'heroSlidesImage',
        displayName: 'Hero Slides',
        modelApiId: 'Asset'
      }
    });

    console.log("Creating HomeSection model...");
    client.createModel({
      apiId: 'HomeSection',
      apiIdPlural: 'HomeSections',
      displayName: 'Home Section',
    });

    client.createSimpleField({
      apiId: 'identifier',
      displayName: 'Identifier',
      type: 'STRING',
      modelApiId: 'HomeSection',
      isUnique: true,
    });

    client.createSimpleField({
      apiId: 'title',
      displayName: 'Title',
      type: 'STRING',
      modelApiId: 'HomeSection',
    });

    client.createSimpleField({
      apiId: 'subtitle',
      displayName: 'Subtitle',
      type: 'STRING',
      modelApiId: 'HomeSection',
    });

    client.createSimpleField({
      apiId: 'description',
      displayName: 'Description',
      type: 'STRING',
      modelApiId: 'HomeSection',
    });

    console.log("Creating PageContent model...");
    client.createModel({
      apiId: 'PageContent',
      apiIdPlural: 'PageContents',
      displayName: 'Page Content',
    });

    client.createSimpleField({
      apiId: 'slug',
      displayName: 'Slug',
      type: 'STRING',
      modelApiId: 'PageContent',
      isUnique: true,
    });

    client.createSimpleField({
      apiId: 'title',
      displayName: 'Title',
      type: 'STRING',
      modelApiId: 'PageContent',
    });

    client.createSimpleField({
      apiId: 'subtitle',
      displayName: 'Subtitle',
      type: 'STRING',
      modelApiId: 'PageContent',
    });

    client.createSimpleField({
      apiId: 'content',
      displayName: 'Content',
      type: 'RICHTEXT', 
      modelApiId: 'PageContent',
    });

    client.createRelationalField({
      apiId: 'featuredImage',
      displayName: 'Featured Image',
      type: 'ASSET',
      modelApiId: 'PageContent',
      reverseField: {
        apiId: 'pageContentsFeaturedImage',
        displayName: 'Page Contents',
        modelApiId: 'Asset'
      }
    });

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
