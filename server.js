import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { newsRouter } from './src/routes/news.js';
import { indexRouter } from './src/routes/indexes.js';

const app = express();
const port = 3000;

app.use(session({
  secret:'userSecretKey',
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:60000}
}))

app.use(urlLogger);

app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static('src/public'));

app.use('/', indexRouter);
app.use('/news', newsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function urlLogger(req, res, next) {
  console.log('Requested URL:', req.originalUrl);
  next();
}