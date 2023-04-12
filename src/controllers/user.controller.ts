import { Request, Response, NextFunction } from '../interfaces/express';

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      message: 'User found',
      status: 'success',
      user: req.userInfo,
    });
  } catch (error) {
    next(error);
  }
};
