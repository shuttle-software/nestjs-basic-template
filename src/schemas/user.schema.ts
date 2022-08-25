import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import Crypto from 'crypto';
import Jwt from 'jsonwebtoken';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },
  minimize: false
})
export class User {

  _id: ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  private salt: string;

  @Prop()
  private hash: string;

  @Prop()
  avatar: string;

  generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 1);
  
    return Jwt.sign({
      id: this._id,
      // exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, process.env['ACCESS_TOKEN_SECRET']);
  }

  validatePassword(password: string) {
    const hash = Crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };

  setPassword(password: string) {
    this.salt = Crypto.randomBytes(16).toString('hex');
    this.hash = Crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  }
}

export const UserSchema = SchemaFactory.createForClass(User);