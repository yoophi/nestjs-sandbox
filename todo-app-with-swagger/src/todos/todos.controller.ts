import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todos')
export class TodosController {
  @ApiOperation({ summary: 'get Todo list' })
  @ApiOkResponse()
  @Get()
  getTodoList() {
    return [];
  }

  @ApiOperation({ summary: 'create new Todo' })
  @ApiOkResponse()
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  createTodo() {
    return [];
  }

  @ApiOperation({ summary: 'get Todo Detail' })
  @ApiOkResponse()
  @Get('/:todoId')
  getTodoDetail() {
    return {};
  }

  @ApiOperation({ summary: 'update Todo' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Patch('/:todoId')
  updateTodo() {
    return {};
  }

  @ApiOperation({ summary: 'delete Todo' })
  @ApiOkResponse()
  @Delete('/:todoId')
  deleteTodo() {
    return {};
  }
}
