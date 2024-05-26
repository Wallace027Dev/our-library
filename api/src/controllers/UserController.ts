import { NextFunction, Request, Response } from 'express';

import Users from '../models/Users';
import NotFound from '../errors/NotFound';

class UserController {
  static async listAll  (req: Request, res: Response, next: NextFunction) {
    try {
      const users = await Users
        .find({})
        .populate('wishlist')
        .exec();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    };
  }

  static async searchById  (req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const user = await Users
        .findById(userId)
        .populate('wishlist')
        .exec();
      if (user && user !== undefined) {
        res.status(200).json(user);
      } else {
        next(new NotFound("User not found!"));
      };
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
      }

      const users = await Users
        .find({ name: { $regex: query, $options: 'i' } })
        .populate('wishlist')
        .exec();

      if (users.length === 0) {
        next(new NotFound("User not found!"));
      }

      res.status(200).json(users);
    } catch (error) {
      next(error);
    };
  }

  static async store (req: Request, res: Response, next: NextFunction) {
    try {
      const user = await req.body;
      const existingUser = await Users.findOne({ title: user.title });

      if (existingUser) {
        return res.status(200).send({ message: "This user already exists" });
      };
      const newUser = await Users.create(user);
      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    };
  };

  static async update (req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;

      const existingUser = await Users.findById(userId);
      if (!existingUser) {
        next(new NotFound("User not found!"));
      };

      const updatedUser= await Users.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    };
  };

  static async delete (req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const userExists = await Users.findById(userId);

      if (userExists) {
        await Users.findByIdAndDelete(userId);
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
