import { Controller, Get } from '@nestjs/common';
import { SigniService } from './signi.service';

@Controller('signi')
export class SigniController {
  constructor(private readonly signiService: SigniService) {}

  @Get()
  getData() {
    return this.signiService.getData();
  }
}
