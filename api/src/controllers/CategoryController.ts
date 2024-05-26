import { NextFunction, Request, Response } from 'express';

import Categories from '../models/Categories';

class CategoryController {
  static async listAll (_req: Request, res: Response, next: NextFunction) {
    try {
      const listCategories = await Categories.find();

      res.status(200).json(listCategories);
    } catch (error) {
      next(error);
    };
  };

  static async store (req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = await req.body;
      const existingBook = await Categories.findOne({ title: title });

      if (existingBook) {
        return res.status(200).send({ message: "This category already exists" });
      };

      const newCategory = await Categories.create({ title });

      res.status(200).json(newCategory);
    } catch (error) {
      next(error);
    };
  };

  static async delete (req: Request, res: Response, next: NextFunction) {
    try {
      const categoryId = req.params.id;
      const categoryExists = await Categories.findById(categoryId);

      if (categoryExists) {
        await Categories.findByIdAndDelete(categoryId);
        res.status(201).send("Category deleted");
      } else {
        res.status(404).send("Category not found");
      }
    } catch (error) {
      next(error);
    };
  };
};

export default CategoryController;
