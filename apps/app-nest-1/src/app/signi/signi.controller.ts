import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { SigniService } from './signi.service';

@Controller('signi')
export class SigniController {
  constructor(private readonly signiService: SigniService) {}

  @Post('contract')
  async createContract() {
    return this.signiService.createContract();
  }

  @Post('contract/callback')
  @HttpCode(200)
  callback(
    @Query() query: { state: string; templateId: string; sessionId: string },
    @Body() body: any,
  ) {
    console.log(
      'SigniController.callback query',
      JSON.stringify(query, null, 2),
    );
    console.log('SigniController.callback body', JSON.stringify(body, null, 2));
  }
}
