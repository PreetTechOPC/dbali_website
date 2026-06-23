const https = require('https');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const query = `
query {
  viewer {
    projects {
      name
      id
    }
  }
}`;

const options = {
  hostname: 'management.hygraph.com',
  path: '/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.HYGRAPH_TOKEN}`
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Response:', data));
});
req.on('error', console.error);
req.write(JSON.stringify({ query }));
req.end();
