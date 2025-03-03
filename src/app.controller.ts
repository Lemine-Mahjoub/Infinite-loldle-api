import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('random')
  getRandomNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
