import { NextFunction, Request, Response } from 'express';

import Books from '../models/Books';
import NotFound from '../errors/NotFound';

class BookController {
  static async listAll (req: Request, res: Response, next: NextFunction) {
    try {
      const listBooks = Books.find();
      req.body = listBooks;

      next();
    } catch (error) {
      next(error);
    };
  };

  static async searchByQuery (req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.query as string;

      if (!query) {
        return res.status(400).json({
          message: 'Query parameter is required'
        });
      };

      const listBooks = Books.find({ $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } }
      ]});
      req.body = listBooks;

      next();
    } catch (error) {
      next(error);
    };
  };

  static async searchById (req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params.id;

      const book = await Books.findById(bookId);

      res.status(200).json(book);
    } catch (error) {
      next(error);
    };
  };

  static async store (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        title,
        author,
        categories
      } = await req.body;
      console.log(categories)
      const imagePath = req.file?.filename;


      const existingBook = await Books.findOne({ title: title });

      if (existingBook) {
        return res.status(200).send({ message: "This book already exists" });
      };

      const newBook = new Books({
        title,
        author,
        categories,
        imagePath
      });

      await newBook.save();

      res.status(200).json(newBook);
    } catch (error) {
      next(error);
    };
  };

  static async update (req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params.id;

      const existingBook = await Books.findById(bookId);
      if (!existingBook) {
        next(new NotFound("Book not found!"));
      };

      const updatedBook= await Books.findByIdAndUpdate(
        bookId,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedBook);
    } catch (error) {
      next(error);
    };
  };

  static async delete (req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params.id;
      const bookExists = await Books.findById(bookId);

      if (bookExists) {
        await Books.findByIdAndDelete(bookId);
        res.status(201).send("Book deleted");
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      next(error);
    };
  };
};

export default BookController;
