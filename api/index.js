import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) if (v) headers.set(k, v);

    let body = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (c) => chunks.push(c));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
      });
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body: body?.length ? body : undefined
    });

    const result = await server.fetch(request);

    res.statusCode = result.status;
    for (const [k, v] of result.headers) res.setHeader(k, v);
    const buffer = Buffer.from(await result.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error('Error in Vercel wrapper:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
