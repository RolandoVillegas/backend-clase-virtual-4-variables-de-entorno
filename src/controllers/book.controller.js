import { getConnection } from "../database/database";
// Importamos estos tipos, para tener más accesible los métodos de express
import { request, response } from "express";

const getBooks = async (req = request, res = response) => {

    try {
        // 1. Creamos una conexión.
        const connection = await getConnection();

        // 2. Enviamos la consulta, para obtener la información
        const [books, fields] = await connection.query('SELECT * FROM books');
        
        // 3. Enviamos la información al usuario, ajustando el mensaje.
        res.status(200).json(
            {
                ok: true,
                result: books,
                msg: 'Approved'
            }
        );
    } catch (err) {
        // En caso de error, se lo informamos al usuario
        res.status(400).json( 
            {
                ok: false,
                err,
                msg: 'Some error'
            }
        );
    }
};

export const booksController = { getBooks};