import express from 'express';
import indexHandler from '../handlers';

const router = express.Router();

/* GET home page. */
router.get('/', indexHandler);

export default router;
