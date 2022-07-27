import {
  Types,
} from 'mongoose';
import { ICommonGameDocument } from './commonGame';
import { ISoftwareDocument } from './software';

export interface VideoGame extends ICommonGameDocument, ISoftwareDocument {
  // actors: Array<Types.ObjectId>; // Person
  // directors: Array<Types.ObjectId>; // Person
  // gamePlatforms: Array<Types.ObjectId>; // GamePlatform
  // gameServers: Array<Types.ObjectId>; // GameServer
  tips: string[]; // CreativeWork (cheatCodes, gameTips)
  // musicBy: Array<Types.ObjectId>; // MusicGroup | Person
  // playMode: Array<Types.ObjectId>; // "Coop" | "Single" | "Multiplayer"
  // trailers: Array<Types.ObjectId>; // Video
}
