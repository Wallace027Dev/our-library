import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const CategoryRoutes = Router();

CategoryRoutes.get('/categories', CategoryController.listAll);

CategoryRoutes.post('/categories', CategoryController.store);

CategoryRoutes.delete('/categories/:id', CategoryController.delete);

export default CategoryRoutes;
