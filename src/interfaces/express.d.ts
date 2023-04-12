import { Request, Response, NextFunction } from 'express';
import { User } from './../models/user.models';
interface UserWithId extends User {}
export interface Request extends Request {
  userInfo?: UserWithId;
}
export interface Response extends Response {}
export interface NextFunction extends NextFunction {}
