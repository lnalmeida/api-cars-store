import express, { Request, Response } from 'express';

import router from './routes';
import connection from './database/database';

const app = express();
const port = process.env.PORT || 2222;

app.use(express.json());
app.use(router);

connection();

app.listen(port, () => {
    console.log(`Server running on ${port} port`);
});