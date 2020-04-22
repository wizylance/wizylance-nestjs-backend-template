import { Module } from '@nestjs/common';
import { IsEmailAlreadyExistConstraint } from '@bn-validator/is-email-already-exist.validator';
import { DatabaseModule } from '@bn-database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    IsEmailAlreadyExistConstraint,
  ],
})
export class SharedModule {
}
