import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './modules/empresa/empresa.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    EmpresaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
