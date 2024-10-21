const express = require('express');
const app = express();
//const routes = require('./routes');

// Utilisation du routeur
//app.use('/', routes);

// Middleware pour parser les requêtes JSON
app.use(express.json());

const articleRoutes = require('./routes/articles');
const commentRoutes = require('./routes/comments');

// Utilisation des routes
app.use('/articles', articleRoutes);
app.use('/articles', commentRoutes);

// Démarrer le serveur sur le port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});