import { Client, SimpleFieldType } from '@hygraph/management-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const managementEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

async function main() {
  try {
    const contentEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
    const mutation = `
      mutation CreateProject($data: ProjectCreateInput!) {
        createProject(data: $data) {
          id
          slug
        }
      }
    `;

    const toAST = (text) => ({
      children: [{
        type: 'paragraph',
        children: [{ text }]
      }]
    });

    const entryData = {
      title: 'White House Phase III',
      slug: 'white-house',
      location: 'NH-121, Ramnagar Road, Kashipur',
      projectStatus: 'Govt. Approved',
      shortDescription: 'Secure your future with premium Govt. Approved & Rera Certified residential plots in our highly anticipated Phase III development on Ramnagar Road. Limited availability.',
      overview: toAST(`Secure your future with premium Govt. Approved & Rera Certified residential plots in our highly anticipated Phase III development on Ramnagar Road. Limited availability.`),
    };

    console.log('Creating White House Phase III project entry...');
    const response = await fetch(contentEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { data: entryData },
      }),
    });

    const result = await response.json();
    if (result.errors) {
      console.error('GraphQL Errors:', JSON.stringify(result.errors, null, 2));
    } else {
      console.log('Project entry created:', result.data.createProject);
      
      // Publish the entry
      const publishMutation = `
        mutation PublishProject($id: ID!) {
          publishProject(where: {id: $id}, to: PUBLISHED) {
            id
          }
        }
      `;
      const pubRes = await fetch(contentEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
          query: publishMutation,
          variables: { id: result.data.createProject.id },
        }),
      });
      const pubResult = await pubRes.json();
      console.log('Project entry published:', pubResult.data?.publishProject);
    }
  } catch (err) {
    console.error('Error updating Hygraph content:');
    console.error(err);
  }
}

main();
