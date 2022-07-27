import {
  Document,
} from 'mongoose';

export interface IPersonDocument extends Document {
  personData: unknown;
}
