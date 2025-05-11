import express from 'express';
import { envs } from './configuration/envs.js';

// Importación de controlador para libros
import { booksController } from './controllers/book.controller.js';

const app = express();

// Luego de importar envs, es posible utilizar la propiedad envs.PORT
app.set('port', envs.PORT);

// Luego de importar el controlador para libros, podremos hacer la consulta desde el navegador
// con este endpooint

app.get('/books', booksController.getBooks)

export default app;