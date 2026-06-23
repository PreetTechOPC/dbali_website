const https = require('https');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const query = `
query {
  projects {
    title
    slug
    mapImage {
      url
    }
  }
}`;

const options = {
  hostname: 'api-ap-south-1.hygraph.com',
  path: '/v2/cmpptx73d023x07w7s1nv3oj8/master',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
