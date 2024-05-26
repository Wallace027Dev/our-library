import express, { Request, Response, Application } from 'express';

import BookRoutes from './BookRoutes';
import UserRoutes from './UserRouter';
import UserBooksRoutes from './UserBookRoutes';
import CategoryRoutes from './CategoryRoutes';

const routes = (app: Application) => {
  app.route('/').get((_req: Request, res: Response) => {
    res.status(200).send({ title: "My personal library" });
  });

  app.use(
    express.json(),
    BookRoutes,
    CategoryRoutes,
    UserRoutes,
    UserBooksRoutes,
  );
};

export default routes;
