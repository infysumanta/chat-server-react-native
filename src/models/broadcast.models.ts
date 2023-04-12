import { Schema, model } from 'mongoose';
import { IBroadCast } from '../interfaces/models';

const broadcastSchema = new Schema<IBroadCast>(
  {
    text: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String },
  },
  { timestamps: true },
);

export const BroadCast = model<IBroadCast>('BroadCast', broadcastSchema);
