const { Client } = require('@hygraph/management-sdk');
require('dotenv').config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating PageCategory Enumeration...");
    client.createEnumeration({
      apiId: 'PageCategory',
      displayName: 'Page Category',
      values: [
        { apiId: 'AboutUs', displayName: 'About Us' },
        { apiId: 'CompanyProfile', displayName: 'Company Profile' },
        { apiId: 'MDMessage', displayName: 'MD Message' },
        { apiId: 'OurJourney', displayName: 'Our Journey' },
        { apiId: 'VisionMission', displayName: 'Vision & Mission' },
        { apiId: 'WhyChooseUs', displayName: 'Why Choose Us' },
      ],
    });

    console.log("Adding pageCategory field to PageContent model...");
    client.createEnumerableField({
      apiId: 'pageCategory',
      displayName: 'Page Category',
      enumerationApiId: 'PageCategory',
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
