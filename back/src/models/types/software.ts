import { ICreativeWorkDocument } from './creativeWork';

export interface ISoftwareDocument extends ICreativeWorkDocument {
    applicationCategory: string;
    applicationSubCategory: string;
    applicationSuite: string;
    availableOnDevice: string[];
    // countriesNotSupported: string[];
    // countriesSupported: string[];
    downloadUrl: string;
    features: string[];
    fileSize: number;
    installUrl: string;
    memoryRequirements: number;
    operatingSystem: string[];
    // permissions: string[];
    processorRequirements: string;
    // releaseNotes: string;
    screenshots: any[];
    softwareAddOns: ISoftwareDocument[];
    // softwareHelp: ICreativeWorkDocument[];
    softwareRequirements: string;
    softwareVersion: string;
    storageRequirements: string;
    // supportingData: any;
}
