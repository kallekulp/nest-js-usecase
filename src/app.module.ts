import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AModule } from "./modules/a/a.module";

@Module({
  imports: [AModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
