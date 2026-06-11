const { Client, SimpleFieldType } = require('@hygraph/management-sdk');
require('dotenv').config({ path: '.env.local' });

const managementEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN,
  endpoint: managementEndpoint,
});

async function main() {
  try {
    console.log('Creating/ensuring Project schema fields...');
    const fields = [
      { apiId: 'overview', displayName: 'Overview' },
      { apiId: 'technicalSpecifications', displayName: 'Technical Specifications' },
      { apiId: 'amenities', displayName: 'Amenities' },
      { apiId: 'quickOverview', displayName: 'Quick Overview' },
    ];

    for (const f of fields) {
      try {
        await client.createSimpleField({
          parentApiId: 'Project',
          apiId: f.apiId,
          displayName: f.displayName,
          type: SimpleFieldType.Richtext,
        });
        console.log(`Created RichText field ${f.apiId}`);
      } catch (e) {
        if (e.message && e.message.includes('already exists')) {
          console.log(`Field ${f.apiId} already exists, skipping.`);
        } else {
          throw e;
        }
      }
    }

    console.log('Running schema migration...');
    const res = await client.run(true);
    console.log('Migration result:', res.status ? 'Success' : JSON.stringify(res));

    console.log('Creating Palm Groove project entry via Content API...');
    const contentEndpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
    const mutation = `
      mutation CreateProject($data: ProjectCreateInput!) {
        createProject(data: $data) {
          id
          slug
        }
      }
    `;

    // A helper to convert simple text into Hygraph's Rich Text AST
    const toAST = (text) => ({
      children: [{
        type: 'paragraph',
        children: [{ text }]
      }]
    });

    const entryData = {
      title: 'Dbali Palm Groove Villas',
      slug: 'palm-groove',
      location: 'Ramnagar Road Corridor, Kashipur',
      projectStatus: 'Ready to Move',
      shortDescription: 'Flagship 2 BHK luxury duplex villas designed for modern community living in Kashipur.',
      overview: toAST(`Dbali Palm Groove stands as one of our most popular ready-to-move enclaves. Each independent duplex villa is designed with detailed focus on ventilation, maximum floor space usage, and Vaastu compliance. The community features wide concrete roads, gated compound walls, and direct access to landscaped parks, ensuring your family enjoys safety and tranquility.`),
      technicalSpecifications: toAST(`Structure & Foundation
- Earthquake resistant RCC framed columns & footings
- High-strength fly-ash brick walls with premium cement plastering
- Termite control treatment applied across foundation levels

Flooring & Finishes
- Premium double-charged vitrified flooring in drawing & dining rooms
- Anti-skid ceramic tiles in bathrooms and balconies
- High-grade weather-resistant exterior emulsion paints

Kitchen & Washrooms
- Fully modular cabinet setup with soft-close channels
- Black granite slab countertops with stainless steel sinks
- Branded CP fittings (Jaguar/Hindware equivalent) with wall-hung closets`),
      amenities: toAST(`24/7 Gated Security: Single point entry & exit guard posts accompanied by CCTV monitoring.
Internal Concrete Roads: 30-feet wide concrete roads designed for smooth double-lane vehicle access.
Integrated Parks: Landscaped family lawns and kids play areas positioned centrally in the block.`),
      quickOverview: toAST(`Villa Sizes: 2 BHK Independent Duplex
Possession Status: Ready to Move
Registry Option: Immediate Registry & Mutation
Location: Ramnagar Road Corridor, Kashipur
Approved By: Leading Nationalized Banks (SBI, HDFC)`),
    };

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
    console.error('Error updating Hygraph schema/content:');
    console.error(err);
  }
}

main();
