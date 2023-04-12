import { Document, ObjectId } from 'mongoose';
import { UserAuthJson, UserJson } from './types';

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  photo?: string;
  isActive: boolean;
  matchPassword: (password: string) => Promise<boolean>;
  toJSON: () => UserJson;
  toAuthJSON: () => UserAuthJson;
}

export interface IChat extends Document {
  sender: ObjectId;
  receiver: ObjectId;
  messages: ObjectId[];
}

export interface IMessage extends Document {
  text: string;
  sender: ObjectId;
  receiver: ObjectId;
  image?: string;
}

export interface IBroadCast extends Document {
  text: string;
  sender: ObjectId;
  receiver: ObjectId;
  image?: string;
}
