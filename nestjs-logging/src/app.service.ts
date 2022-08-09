import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Hello, World!');
    this.logger.debug({ message: 'Hello, World!' });
    this.logger.verbose('Hello, World! with verbose');
    this.logger.warn('Hello, World! with warn');
    return 'Hello World!';
  }
}
