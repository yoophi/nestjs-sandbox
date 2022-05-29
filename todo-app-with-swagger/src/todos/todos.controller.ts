import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTodoRequest } from './dto/create-todo.request';
import { UpdateTodoRequest } from './dto/update-todo.request';

@ApiTags('Todo')
@Controller('todos')
export class TodosController {
  @ApiOperation({ summary: 'get Todo list' })
  @ApiOkResponse()
  @ApiQuery({
    name: 'isCompleted',
    enum: ['all', 'true', 'false'],
  })
  @Get()
  getTodoList() {
    return [];
  }

  @ApiOperation({ summary: 'create new Todo' })
  @ApiOkResponse()
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  createTodo(@Body() createTodoRequest: CreateTodoRequest) {
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
  updateTodo(@Body() updateTodoRequest: UpdateTodoRequest) {
    return {};
  }

  @ApiOperation({ summary: 'delete Todo' })
  @ApiOkResponse()
  @Delete('/:todoId')
  deleteTodo() {
    return {};
  }
}
