const express = require('express');
const router = express.Router();

// Route principale qui explique /hello
router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>ECE AST</title>
      </head>
      <body>
        <h1>Welcome to the Node.js Express application!</h1>
        <p>To use this application, go to the <a href="/hello?name=John">/hello</a> route.</p>
        <p>Example: <a href="/hello?name=John">/hello?name=John</a></p>
        <p>Replace "John" with your own name to get a personalized response!</p>
      </body>
    </html>
  `);
});

// Route /hello avec un paramètre name
router.get('/hello', (req, res) => {
  const name = req.query.name || 'anonymous';
  const myName = 'Ngansom';

  if (name.toLowerCase() === myName.toLowerCase()) {
    res.send(`
      <p>Hello, ${name}!</p>
      <p>Voici une courte introduction de moi-même : Je suis un développeur passionné par la programmation et les nouvelles technologies.</p>
    `);
  } else {
    res.send(`<p>Hello, ${name}!</p>`);
  }
});

// Route 404 pour toute autre URL
router.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  `);
});

module.exports = router;
