import express from 'express';
import {
  listCompanies,
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../handlers/company';

const router = express.Router();

router.get('/', listCompanies);
router.post('/', addCompany);
router.get('/:id', getCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;
