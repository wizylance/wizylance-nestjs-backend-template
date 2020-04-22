import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { modelProviders } from './model.providers';

@Module({
  providers: [...databaseProviders, ...modelProviders],
  exports: [...databaseProviders, ...modelProviders],
})
export class DatabaseModule {
}
