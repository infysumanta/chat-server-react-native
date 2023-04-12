import { NextFunction, Request, Response } from '../interfaces/express';
import { User } from '../models/user.models';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, username, password } = req.body;

    const user = await User.create({
      name,
      username,
      password,
    });

    res.status(201).json({
      success: true,
      data: user.toAuthJSON(),
    });
  } catch (error) {
    next(error);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(new Error('Please provide username and password'));
    }
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      return next(new Error('Invalid credentials'));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new Error('Invalid credentials'));
    }
    res.status(200).json({
      success: true,
      data: user.toAuthJSON(),
    });
  } catch (error) {
    next(error);
  }
};
