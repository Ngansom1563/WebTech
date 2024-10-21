# WebTech

# Node.js Basic Application with Multiple Routes

## Introduction
This is a simple Node.js application that demonstrates handling multiple routes using the built-in `http` module. The application provides three routes:

1. `/` - Explains how the `/hello` route works and provides example links.
2. `/hello?name=<your_name>` - Takes a `name` query parameter and:
   - If your name is provided, it replies with a short introduction.
   - If any other name is provided, it replies with a greeting.
3. Any other route - Replies with a 404 error and a "Page Not Found" message.

## Demarrage de l'application

### Prerequi:
- You need to have Node.js installed on your machine.

### Etapes:
1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to start the server:
   ```bash
   node index.js

## Auteur:
Emmanuel NGANSOM
