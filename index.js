import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './src/routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __rootpath = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static('src/public'));

app.get(Object.keys(routes), (req, res) => {
  const filePath = routes[req.path];
  const absolutefilePath = path.join(__rootpath, 'src/views', filePath);

  res.sendFile(absolutefilePath, (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

