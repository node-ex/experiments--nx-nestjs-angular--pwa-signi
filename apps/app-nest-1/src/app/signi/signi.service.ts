import { Injectable } from '@nestjs/common';

@Injectable()
export class SigniService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
