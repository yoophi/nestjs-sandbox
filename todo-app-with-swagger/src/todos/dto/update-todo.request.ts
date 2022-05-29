import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTodoRequest {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  isCompleted: boolean;
}
