export class DatabaseConstants {
  static readonly dbToken = 'DBToken';
}

export function getCollectionToken(collection: BnCollections) {
  switch (collection) {
    case BnCollections.User:
      return 'UserToken';
  }
}

export function getCollectionName(collection: BnCollections) {
  switch (collection) {
    case BnCollections.User:
      return 'User';
  }
}

export enum BnCollections {
  User,
}
