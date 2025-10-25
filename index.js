import { server as wisp } from '@mercuryworkshop/wisp-js/server';
import { createServer } from 'http';

const port = process.env.PORT || 8080;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Wisp server running');
});

server.on('upgrade', (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.on('listening', () => {
  console.log(`Wisp server listening on port ${port}`);
});

server.listen(port, '0.0.0.0');