import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtSecret, tokenExpired } from '../../app.config';
import { SharedModule } from '../../shared/shared.module';
import { DatabaseModule } from '@bn-database/database.module';

@Module({
  imports: [
    DatabaseModule,
    SharedModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: tokenExpired,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule],
})
export class AuthModule {
}
