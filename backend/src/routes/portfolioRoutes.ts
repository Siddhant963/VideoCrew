import express from 'express';
import {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} from '../controllers/portfolioController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

// Public
router.get('/', getAllPortfolio);
router.get('/:id', getPortfolioById);

// Protected
router.post('/', protect, createPortfolio);
router.put('/:id', protect, updatePortfolio);
router.delete('/:id', protect, deletePortfolio);

export default router;
