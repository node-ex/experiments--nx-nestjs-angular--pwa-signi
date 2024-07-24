import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SigniModule } from './signi/signi.module';

@Module({
  imports: [SigniModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
