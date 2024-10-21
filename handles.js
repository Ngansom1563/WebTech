const url = require('url');
const qs = require('querystring');

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    // Page d'accueil expliquant comment fonctionne /hello
    if (path === '/') {
      const content = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>ECE AST</title>
          </head>
          <body>
            <h1>Welcome to the Node.js application!</h1>
            <p>To use this application, go to the <a href="/hello?name=John">/hello</a> route.</p>
            <p>Example: <a href="/hello?name=John">/hello?name=John</a></p>
            <p>Replace "John" with your own name to get a personalized response!</p>
          </body>
        </html>
      `;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(content);
      res.end();
    }

    // Page /hello qui traite les noms
    else if (path === '/hello') {
      const myName = 'Ngansom'; // Remplacez par votre propre nom
      res.writeHead(200, { 'Content-Type': 'text/html' });

      if ('name' in params) {
        const name = params['name'];
        
        // Si c'est votre propre nom
        if (name.toLowerCase() === myName.toLowerCase()) {
          res.write(`<p>Hello, ${name}!</p>`);
          res.write('<p>Voici une courte introduction de moi-même : Je suis un développeur passionné par la programmation et les nouvelles technologies.</p>');
        } 
        
        // Si c'est un nom aléatoire
        else {
          res.write(`<p>Hello, ${name}!</p>`);
        }
      } else {
        res.write('<p>Hello, anonymous!</p>');
      }
      res.end();
    }

    // Route 404 : page non trouvée pour tout autre chemin
    else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 - Page Not Found</h1>');
      res.write('<p>The page you are looking for does not exist.</p>');
      res.end();
    }
  }
}
