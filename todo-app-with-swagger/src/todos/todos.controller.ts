import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('todos')
export class TodosController {
  @ApiOperation({ summary: 'get Todo list' })
  @Get()
  getTodoList() {
    return [];
  }

  @ApiOperation({ summary: 'create new Todo' })
  @Post()
  createTodo() {
    return [];
  }

  @ApiOperation({ summary: 'get Todo Detail' })
  @Get('/:todoId')
  getTodoDetail() {
    return {};
  }

  @ApiOperation({ summary: 'update Todo' })
  @Patch('/:todoId')
  updateTodo() {
    return {};
  }

  @ApiOperation({ summary: 'delete Todo' })
  @Delete('/:todoId')
  deleteTodo() {
    return {};
  }
}
