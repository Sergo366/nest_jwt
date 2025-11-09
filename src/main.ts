import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(PORT, HOST, () => {
    console.log(`Server is running on port', http://${HOST}:${PORT}`);
  });
}
bootstrap();
