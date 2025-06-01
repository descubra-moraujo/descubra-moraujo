import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes.js';
import prisma from './config/prisma.js';

const app = express();

app.use(cors());  
app.use(express.json());
   
app.use('/', adminRoutes); 
app.get('/admin/login', (req, res) => {
  res.send('Pagina de login do adm')
})

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

