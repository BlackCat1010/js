import express from "express";

const router = express.Router();

router.get("/article/:articleId", (req, res) => {
  res.render("news/newsArticle", {articleId: req.params.articleId});
});

router.use((req, res) => {
  res.render("news/newsDashboard");
});

router.param("articleId", (req, res, next, articleId) => {
  if (!req.session.viewedArticles) {
    req.session.viewedArticles = [];
  }
  if (!req.session.viewedArticles.includes(articleId)) {
    req.session.viewedArticles.push(articleId);
  }
  console.log('user\'s viewed articles:', req.session.viewedArticles);
  next();
});

export { router as newsRouter };