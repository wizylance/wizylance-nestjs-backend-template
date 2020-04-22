import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [DatabaseModule, FeaturesModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
