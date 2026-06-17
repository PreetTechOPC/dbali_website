import { Client } from '@hygraph/management-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating LifestyleCategory Enumeration...");
    client.createEnumeration({
      apiId: 'LifestyleCategory',
      displayName: 'Lifestyle Category',
      values: [
        { apiId: 'HomeGuide', displayName: 'Home Guide' },
        { apiId: 'VaastuSpecial', displayName: 'Vaastu Special' },
        { apiId: 'InteriorDesign', displayName: 'Interior Design' },
        { apiId: 'BetterLiving', displayName: 'Better Living' },
      ],
    });

    console.log("Adding lifestyleCategory field to PageContent model...");
    client.createEnumerableField({
      apiId: 'lifestyleCategory',
      displayName: 'Lifestyle Category',
      enumerationApiId: 'LifestyleCategory',
      modelApiId: 'PageContent',
    });

    console.log("Running migration...");
    const res = await client.run(true);
    console.log("Migration result:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("Error updating schema:");
    if (err.message) {
      console.error(err.message);
    }
  }
}

main();
