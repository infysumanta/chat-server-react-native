import { Schema, model } from 'mongoose';
import { IMessage } from '../interfaces/models';

const messageSchema = new Schema<IMessage>(
  {
    text: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String },
  },
  { timestamps: true },
);

export const Message = model<IMessage>('Message', messageSchema);
