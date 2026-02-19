import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render("main/index");
});

router.get('/tailwind', (req, res) => {
  res.render("main/indextw");
});

router.get('/bootstrap', (req, res) => {
  res.render("main/indexbs");
});

router.get('/header', (req, res) => {
  res.render("common/header");
});

router.use((req, res) => {
  res.status(404).render("main/index");
});

export { router as indexRouter };
