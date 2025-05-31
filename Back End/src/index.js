// index.js
import express from 'express';
import adminRoutes from './routes/adminRoutes.js'; // certifique-se que o caminho está correto
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rotas do admin e rotas públicas
app.use('/api', adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
