import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as apiInfo from '@infrastructure/config/api-info';
import { envs } from '@infrastructure/config/envs';
import * as swagger from '@infrastructure/config/swagger';
import { ResponseInterceptor } from '@infrastructure/interceptors/response.interceptor';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useLogger(app.get(Logger));
  app.flushLogs();

  swagger.setup(app);
  app.setGlobalPrefix(apiInfo.PREFIX);
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(envs.PORT, async () => {
    Logger.log(`Server is running on ${envs.PORT} port`);
  });
}

bootstrap();
