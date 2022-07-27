import {
  Document,
} from 'mongoose';

export interface IThingDocument extends Document {
  id: string;
  slug: string;

  // additionalType: string;
  alternateNames: string[];
  description: string;
  // disambiguationDescription: string;
  // identifier: string;
  image: string;
  name: string;
  // potentialAction: any;
  // sameAs: string;
  // subjectOf: any;

  imageUrl: string,
  entities: any[];
  url: string,
}
