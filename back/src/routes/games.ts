import express from 'express';
import {
    listGames,
    addGame,
    getGame,
    updateGame,
    deleteGame,
} from '../handlers/game';

const router = express.Router()

router.get('/', listGames);
router.post('/', addGame);
router.get('/:id', getGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
