import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoRequest {
  @ApiProperty()
  title: string;
}
