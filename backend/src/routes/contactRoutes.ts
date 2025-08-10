import express from 'express';
import {
  submitContact,
  getAllContacts,
  updateContactStatus
} from '../controllers/contactController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

// Public
router.post('/', submitContact);

// Protected
router.get('/', protect, getAllContacts);
router.put('/:id', protect, updateContactStatus);

export default router;
