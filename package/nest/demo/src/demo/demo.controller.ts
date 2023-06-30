import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  //   constructor(private readonly demoService: DemoService) {}
  constructor(private readonly demoService: DemoService) {}
  @Get('hello')
  getHello() {
    return 'hello world';
  }
}
