import  joi from 'joi';
import  dotnenv from 'dotenv';

// Recuperación de las variables de entorno, utilizando "dotenv".
dotnenv.config();

// Creación del esquema de joi
const envsSchema = joi.object({
    // joi comprueba y valida las variables de entorno antes de levantar el servidor!
    PORT: joi.number().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().allow('').required(),  //.allo('') permite tener una password vacía, como pasa en XAMPP
    DATABASE: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_HOST: joi.string().required()
}).unknown(true);   // .unknow(true) trae todas las variables que existen y que no se declararon explícitamente traer (en nuestro caso, son cuatro)

// Vamos a desestructurar el objeto y validar que todo esté correcto.
const { value: envVars, error } = envsSchema.validate(process.env);

// Si existe un error, se ordena lanzarlo antes de levantar el servidor.
if(error) throw new Error(`Error de validación: ${error.message} `);

// Por último, exportamos las variables para que sean visibles para todo el proyecto.
export const envs = {
    PORT: envVars.PORT,
    DB_USER: envVars.DB_USER,
    DB_PASSWORD: envVars.DB_PASSWORD,
    DATABASE: envVars.DATABASE,
    DB_PORT: envVars.DB_PORT,
    DB_HOST: envVars.DB_HOST
}
    