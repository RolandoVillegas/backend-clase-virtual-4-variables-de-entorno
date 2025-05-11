import app from './app.js';

const main = () => {
  const port = app.get('port');
  app.listen(port);
  console.log(`Servidor ejecutando en el puerto: ${port}`);
};

main();