export declare class DatabaseConstants {
    static readonly dbToken = "DBToken";
}
export declare function getCollectionToken(collection: BnCollections): string;
export declare function getCollectionName(collection: BnCollections): string;
export declare enum BnCollections {
    User = 0
}
