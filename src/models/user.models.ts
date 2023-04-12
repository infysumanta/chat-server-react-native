import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String },
    isActive: { type: Boolean },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    name: this.name,
    username: this.username,
    photo: this.photo,
    isActive: this.isActive,
    token: this.generateJWT(),
  };
};

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: process.env.JWT_EXPIRE,
    },
  );
};

export const User = model<IUser>('User', userSchema);
