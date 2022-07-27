import {
  Document,
} from 'mongoose';

export interface IGamePlatformDocument extends Document {
  platformData: any;
}
