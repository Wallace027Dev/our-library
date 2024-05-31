import { Router } from 'express';
import BookController from '../controllers/BookController';
import UploadHandler from '../middlewares/UploadHandler';
import PaginateBooks from '../middlewares/PaginateBooks';

const BookRoutes = Router();

BookRoutes.get('/books', BookController.listAll, PaginateBooks);

BookRoutes.get('/books/search/', BookController.searchByQuery, PaginateBooks);

BookRoutes.get('/books/:id', BookController.searchById);

BookRoutes.post('/books', UploadHandler.single('imagePath'), BookController.store);

BookRoutes.put('/books/:id', BookController.update);

BookRoutes.delete('/books/:id', BookController.delete);

export default BookRoutes;
