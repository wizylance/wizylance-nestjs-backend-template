import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { apiVersion, appPort } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const appVersion = `/api/${apiVersion}`;

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(appVersion);
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000,
      max: 1000,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('B13 NestJS')
    .setDescription('Backend for B13')
    .setVersion('1.0')
    .setBasePath(appVersion)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(appPort || 3000);
}

bootstrap();
