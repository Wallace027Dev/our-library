import { Router } from 'express';
import UserBookController from '../controllers/UserBookController';
import PaginateUserBooks from '../middlewares/PaginateUserBooks';

const UserBooksRoutes = Router();

UserBooksRoutes.get('/user/books', UserBookController.listAll, PaginateUserBooks);

UserBooksRoutes.get('/user/books/search/', UserBookController.searchByQuery, PaginateUserBooks);

UserBooksRoutes.get('/user/:id/books', UserBookController.searchById);

UserBooksRoutes.post('/user/books', UserBookController.store);

UserBooksRoutes.put('/user/:id/books', UserBookController.update);

UserBooksRoutes.delete('/user/:id/books', UserBookController.delete);

export default UserBooksRoutes;
