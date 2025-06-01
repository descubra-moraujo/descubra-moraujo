import express from 'express';
import adminController from '../controllers/adminController.js';
import authMiddleware from '../middlewares/auth.js';
import eventoController from '../controllers/eventoController.js';
import hospedagemController from '../controllers/hospedagemController.js';
import pontoTuristicoController from '../controllers/pontoTuristicoController.js';
import restauranteController from '../controllers/restauranteController.js';

const router = express.Router();

router.post('/admin/login', adminController.loginAdmin);
router.post('/admin/create', adminController.criarAdmin);

router.post('/admin/evento/create', authMiddleware, eventoController.criarEvento);
router.put('/admin/evento/update/:id', authMiddleware, eventoController.atualizarEvento);
router.delete('/admin/evento/delete/:id', authMiddleware, eventoController.excluirEvento);

router.post('/admin/hospedagem/create', authMiddleware, hospedagemController.criarHospedagem);
router.put('/admin/hospedagem/update/:id', authMiddleware, hospedagemController.atualizarHospedagem);
router.delete('/admin/hospedagem/delete/:id', authMiddleware, hospedagemController.excluirHospedagem);

router.post('/admin/ponto-turistico/create', authMiddleware, pontoTuristicoController.criarPontoTuristico);
router.put('/admin/ponto-turistico/update/:id', authMiddleware, pontoTuristicoController.atualizarPontoTuristico);
router.delete('/admin/ponto-turistico/delete/:id', authMiddleware, pontoTuristicoController.excluirPontoTuristico);

router.post('/admin/restaurante/create', authMiddleware, restauranteController.criarRestaurante);
router.put('/admin/restaurante/update/:id', authMiddleware, restauranteController.atualizarRestaurante);
router.delete('/admin/restaurante/delete/:id', authMiddleware, restauranteController.excluirRestaurante);

export default router;
