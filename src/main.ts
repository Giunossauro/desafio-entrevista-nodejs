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
  
  await app.listen(8080);
}
bootstrap();
