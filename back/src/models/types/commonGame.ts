import { ICreativeWorkDocument } from './creativeWork';

export interface ICommonGameDocument extends ICreativeWorkDocument {
    characterAttributes: string[];
    gameItems: string[];
    gameLocations: string[];
    numberOfPlayers: number;
    quest: any;
}
