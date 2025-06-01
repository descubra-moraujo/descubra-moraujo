import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes.js';
// import publicRoutes from './routes/userRoutes.js';
import prisma from './config/prisma.js';

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/admin', adminRoutes);
// app.use('/', publicRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
 