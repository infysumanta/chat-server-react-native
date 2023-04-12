import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/models';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
