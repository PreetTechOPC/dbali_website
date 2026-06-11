const { Client } = require('@hygraph/management-sdk');
require('dotenv').config({ path: '.env.local' });

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: 'https://api-ap-south-1.hygraph.com/v2/cmpptx73d023x07w7s1nv3oj8/master',
});

async function main() {
  try {
    console.log("Creating ProjectCategory Enumeration...");
    client.createEnumeration({
      apiId: 'ProjectCategory',
      displayName: 'Project Category',
      values: [
        { apiId: 'LatestProjects', displayName: 'Latest Projects' },
        { apiId: 'ExistingProjects', displayName: 'Existing Projects' },
        { apiId: 'PreviousProjects', displayName: 'Previous Projects' },
      ],
    });

    console.log("Adding projectCategory field to Project model...");
    client.createEnumerableField({
      apiId: 'projectCategory',
      displayName: 'Project Category',
      enumerationApiId: 'ProjectCategory',
      modelApiId: 'Project',
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
