import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { DatabaseConstants } from './database.constant';
import { isDevMode, mongoDbUri } from '../app.config';

export const databaseProviders = [
  {
    provide: DatabaseConstants.dbToken,
    useFactory: async (): Promise<typeof mongoose> => {
      mongoose.Promise = bluebird;
      mongoose.set('debug', isDevMode);
      return await mongoose.connect(mongoDbUri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    },
  },
];
