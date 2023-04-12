import { Schema, model } from 'mongoose';
import { IChat } from '../interfaces/models';

const chatSchema = new Schema<IChat>(
  {
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message', required: true }],
  },
  { timestamps: true },
);

export const Chat = model<IChat>('Chat', chatSchema);
