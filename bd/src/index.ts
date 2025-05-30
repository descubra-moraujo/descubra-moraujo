import express from 'express';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {res.send('API online!')});

app.listen(3200, () => console.log('Servidor na porta 3200'));
