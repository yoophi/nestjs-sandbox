import { ApiProperty } from '@nestjs/swagger';

export class TodoResponse {
  @ApiProperty()
  title: string;

  @ApiProperty()
  isCompleted: boolean;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2018-11-21T06:20:32.232Z',
  })
  createdAt: Date;
}
