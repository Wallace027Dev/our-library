import { Router } from 'express';
import UserBookController from '../controllers/UserBookController';
import PaginateUserBooks from '../middlewares/PaginateUserBooks';

const UserBooksRoutes = Router();

UserBooksRoutes.get('/userBooks', UserBookController.listAll, PaginateUserBooks);

UserBooksRoutes.get('/userBooks/search/', UserBookController.searchByQuery, PaginateUserBooks);

UserBooksRoutes.get('/userBooks/:id', UserBookController.searchById);

UserBooksRoutes.post('/userBooks', UserBookController.store);

UserBooksRoutes.put('/userBooks/:id', UserBookController.update);

UserBooksRoutes.delete('/userBooks/:id', UserBookController.delete);

export default UserBooksRoutes;
