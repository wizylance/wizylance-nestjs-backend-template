import { Connection } from 'mongoose';
import { BnCollections, DatabaseConstants, getCollectionName, getCollectionToken } from './database.constant';
import { UserSchema } from './schema/user.schema';

export const modelProviders = [
  {
    provide: getCollectionToken(BnCollections.User),
    useFactory: (connection: Connection) => connection.model(getCollectionName(BnCollections.User), UserSchema),
    inject: [DatabaseConstants.dbToken],
  },
];
