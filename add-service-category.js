const { Client } = require('@hygraph/management-sdk');
require('dotenv').config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating ServiceCategory Enumeration...");
    client.createEnumeration({
      apiId: 'ServiceCategory',
      displayName: 'Service Category',
      values: [
        { apiId: 'HomeLoan', displayName: 'Home Loan' },
        { apiId: 'Careers', displayName: 'Careers' },
        { apiId: 'Downloads', displayName: 'Downloads' },
      ],
    });

    console.log("Adding serviceCategory field to PageContent model...");
    client.createEnumerableField({
      apiId: 'serviceCategory',
      displayName: 'Service Category',
      enumerationApiId: 'ServiceCategory',
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
