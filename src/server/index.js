// Server
import express from 'express';
const app = express();

// Config
import env from './env';
const { PORT, PUBLIC_PATH } = env;

// Routes
/** Static */
app.use(express.static(PUBLIC_PATH));
/** Main */
import path from 'path';
app.get('*', (request, resolve) => {
  resolve.sendFile(path.resolve('./src/app/index.html'));
});

// Server config
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
