import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRoutes = Router();

UserRoutes.get('/users', UserController.listAll);

UserRoutes.get('/users/search/', UserController.searchByQuery);

UserRoutes.get('/users/:id', UserController.searchById);

UserRoutes.post('/users', UserController.store);

UserRoutes.put('/users/:id', UserController.update);

UserRoutes.delete('/users/:id', UserController.delete);

export default UserRoutes;
