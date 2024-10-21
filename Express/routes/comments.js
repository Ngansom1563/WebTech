const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');  // Pour générer des UUID
const db = require('../db');  // Importe la base de données simulée

// GET /articles/:articleId/comments - Récupère tous les commentaires d'un article
router.get('/:articleId/comments', (req, res) => {
  const articleComments = db.comments.filter(c => c.articleId === req.params.articleId);
  if (articleComments.length > 0) {
    res.json(articleComments);
  } else {
    res.status(404).json({ message: 'No comments found for this article' });
  }
});

// POST /articles/:articleId/comments - Ajoute un commentaire à un article
router.post('/:articleId/comments', (req, res) => {
  const { content, author } = req.body;
  const article = db.articles.find(a => a.id === req.params.articleId);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  const newComment = {
    id: uuidv4(),
    timestamp: Date.now(),
    content,
    articleId: req.params.articleId,
    author
  };
  db.comments.push(newComment);
  res.status(201).json(newComment);
});

// GET /articles/:articleId/comments/:commentId - Récupère un commentaire par ID
router.get('/:articleId/comments/:commentId', (req, res) => {
  const comment = db.comments.find(c => c.id === req.params.commentId && c.articleId === req.params.articleId);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

module.exports = router;
