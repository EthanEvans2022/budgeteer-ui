import { Router } from 'express';
import { getHelloWorld } from '../controllers';

const router: Router = Router();

router.get('/hello', getHelloWorld);

export default router;
