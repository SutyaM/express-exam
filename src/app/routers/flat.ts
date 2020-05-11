import { Router } from 'express';
import * as flatController from '../controllers/flat';

export const router: Router = Router({mergeParams: true});

router.get('/flat', flatController.index);
router.get('/flat/:title', flatController.show);
router.post('/flat', flatController.create);
router.put('/flat/:title', flatController.update);
router.delete('/flat/:title', flatController.destroy);