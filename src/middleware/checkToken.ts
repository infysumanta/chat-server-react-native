import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../models/user.models';
import { Request, Response, NextFunction } from '../interfaces/express';

export const checkToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(process.env.JWT_SECRET!);
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader === 'undefined') {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    const bearerToken = bearerHeader.split(' ')[1];
    const tokenInfo = jwt.verify(
      bearerToken,
      process.env.JWT_SECRET!,
    ) as JwtPayload;

    const userInfo = await User.findOne({ _id: tokenInfo.id });

    if (!userInfo) {
      return res.status(403).json({
        message: 'Invalid token',
      });
    }
    console.log(userInfo);
    req.userInfo = userInfo.toJSON();
    next();
  } catch (error) {
    next(error);
  }
};
