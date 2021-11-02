import { User } from './user.interface';
import { Document, model, Schema } from 'mongoose';

// Define UserDoc extended from Document & User
export interface UserDocument extends Document, User {}

// Define new Schema
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    age: { type: Number },
    isGrownUp: { type: Boolean },
    createdAt: { type: Date },
});

// Define UserModel
export const UserModel = model<UserDocument>('User', UserSchema, `${User.name}s`);
