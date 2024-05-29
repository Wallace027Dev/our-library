import { NextFunction, Request, Response } from 'express';

import UserBooks from '../models/UserBooks';
import mongoose, { SortOrder } from 'mongoose';
import NotFound from '../errors/NotFound';
import IncorrectRequest from '../errors/IncorrectRequest';

class UserController {
  static async listAll (req: Request, _res: Response, next: NextFunction) {
    try {
      const listUserBooks = UserBooks.find();
      req.body = listUserBooks;

      next();
    } catch (error) {
      next(error);
    };
  };

  static async searchById  (req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;

      const userBook = await UserBooks
        .find({ userId })
        .populate({
          path: 'bookId',
          populate: {
              path: 'categories'
          }
      });

      res.status(200).json(userBook);
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

      const listUserBooks = UserBooks.find({ status: { $regex: query, $options: 'i' } });
      req.body = listUserBooks;

      next();
    } catch (error) {
      next(error);
    };
  };

  static async store (req: Request, res: Response, next: NextFunction) {
    try {
      const userBook = await req.body;
      const { id } = userBook;
      const userId = new mongoose.Types.ObjectId(id);
      const userAlreadyRegistered = await UserBooks.findOne({ userId });

      if (userAlreadyRegistered) {
        res.status(400).json("User already registered");
      } else {
        const newUserBook = await UserBooks.create(userBook);
        res.status(200).json(newUserBook);
      };
    } catch (error) {
      next(error);
    };
  };

  static async update (req: Request, res: Response, next: NextFunction) {
    try {
      const userBookId = req.params.id;

      const existingUserBook = await UserBooks.findById(userBookId);
      if (!existingUserBook) {
        next(new NotFound("User book not found!"));
      };

      const updatedUserBook= await UserBooks.findByIdAndUpdate(
        userBookId,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedUserBook);
    } catch (error) {
      next(error);
    };
  };

  static async delete (req: Request, res: Response, next: NextFunction) {
    try {
      const userBookId = req.params.id;
      const userExists = await UserBooks.findById(userBookId);

      if (userExists) {
        await UserBooks.findByIdAndDelete(userBookId);
        res.status(201).send("User deleted");
      } else {
        res.status(404).send("User not found");
      };
    } catch (error) {
      next(error);
    };
  };
};

export default UserController;
