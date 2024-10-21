const express = require('express');
const app = express();
const routes = require('./routes');

// Utilisation du routeur
app.use('/', routes);

// Démarrer le serveur sur le port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});