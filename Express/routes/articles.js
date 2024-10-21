const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');  // Pour générer des UUID
const db = require('../db');  // Importe la base de données simulée

// GET /articles - Liste tous les articles
router.get('/', (req, res) => {
  res.json(db.articles);
});

// POST /articles - Ajoute un nouvel article
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  const newArticle = {
    id: uuidv4(),
    title,
    content,
    date: new Date().toLocaleDateString(),
    author
  };
  db.articles.push(newArticle);
  res.status(201).json(newArticle);
});

// GET /articles/:articleId - Récupère un article par ID
router.get('/:articleId', (req, res) => {
  const article = db.articles.find(a => a.id === req.params.articleId);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

module.exports = router;
