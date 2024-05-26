import { NextFunction, Request, Response } from 'express';
import { SortOrder } from 'mongoose';
import IncorrectRequest from '../errors/IncorrectRequest';

async function PaginateUserBooks(req: Request, res: Response, next: NextFunction) {
  try {
    let {
      page = '1',
      limit = '5',
      orderField = '_id',
      order = -1
    } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    const OrderNumber = parseInt(order as string, 10);
    const orderFieldString = orderField as string;

    const sortCriteria: { [key: string]: SortOrder } = {};
    sortCriteria[orderFieldString] = OrderNumber as SortOrder;

    if (limitNumber > 0 && pageNumber > 0) {
      const result = req.body;
      const paginateResult = await result
        .find({})
        .populate({
          path: 'userId',
          populate: {
            path: 'wishlist',
            model: 'Book'
          }
        })
        .populate('bookId')
        .sort(sortCriteria)
        .exec();

      res.status(200).json(paginateResult);
    } else {
      next(new IncorrectRequest);
    }
  } catch (error) {
    next(error);
  };
};

export default PaginateUserBooks;
