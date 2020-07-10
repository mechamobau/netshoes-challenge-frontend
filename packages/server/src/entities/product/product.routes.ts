import { Router } from 'express';

import controllers from './product.controller';

const router = Router();

router.get('/', controllers.index);

router.get('/:id', controllers.show);

export default router;
