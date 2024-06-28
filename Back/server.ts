import express, { Application, Request, Response } from 'express';
import { Server } from 'http';
import mysql from 'mysql2';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = 3000;
app.use(express.json());

app
    .listen(PORT, "localhost", function () {
        console.log(`Servidor rodando na porta ${PORT}`);
})
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste',
    database: 'mascate'
});

db.connect((err: mysql.QueryError | null) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

