import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix("/api/v1")
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false, //true
    transform: true
  }));

  // para tratamento de erros e excessões, mais em:
  //https://docs.nestjs.com/exception-filters
  // app.useGlobalFilters(new HttpExceptionFilter);
  // pode usar a nível de método, módulo e global, que é o caso

  /* app.use((req: Request, res: Response, next) => {
    console.log(req.url);
    next();
  }); */
  
  await app.listen(3000);
}
bootstrap();
