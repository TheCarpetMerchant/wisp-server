import { Server } from '@mercuryworkshop/wisp-js/server';
import { createServer } from 'http';

const port = process.env.PORT || 8080;
const server = createServer();
const wisp = new Server({ server });

server.listen(port, () => {
  console.log(`Wisp server running on port ${port}`);
});
