import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Champs from "../data/champs_data.json";
import { Champ } from 'type/champs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('champs')
  getChamps(): string {
    return JSON.stringify(Champs);
  }

  @Get('random-champ')
  getRandomChamp(): string {
    const randomChamp = Champs[Math.floor(Math.random() * Champs.length)];
    return JSON.stringify(randomChamp).name;
  }
}
