import { Router } from 'express';
import { getUser } from '../controllers/user.controller';
import { checkToken } from '../middleware/checkToken';

const router = Router();

router.get('/', checkToken, getUser);

export default router;
