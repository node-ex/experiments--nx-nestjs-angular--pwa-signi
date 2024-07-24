import { Module } from '@nestjs/common';
import { SigniController } from './signi.controller';
import { SigniService } from './signi.service';

@Module({
  controllers: [SigniController],
  providers: [SigniService],
})
export class SigniModule {}
