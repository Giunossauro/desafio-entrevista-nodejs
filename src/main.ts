import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

  const config = new DocumentBuilder()
    .setTitle('Desafio NestJS')
    .setDescription('API REST para gerenciar um estacionamento de carros e motos')
    .setVersion('1.0')
    .addTag('Estacionamento')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // para tratamento de erros e excessões, mais em:
  //https://docs.nestjs.com/exception-filters
  // app.useGlobalFilters(new HttpExceptionFilter);
  // pode usar a nível de método, módulo e global, que é o caso

  /* app.use((req: Request, res: Response, next) => {
    console.log(req.url);
    next();
  }); */
  
  await app.listen(8080);
}
bootstrap();
