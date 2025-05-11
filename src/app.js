import express from 'express';
import { envs } from './configuration/envs.js';

const app = express();

// Luego de importar envs, es posible utilizar la propiedad envs.PORT
app.set('port', envs.PORT);

export default app;