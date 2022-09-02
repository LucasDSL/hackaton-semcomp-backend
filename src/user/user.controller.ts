import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.users({
      /* PUT BODY FROM userService.users HERE */
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findSelf(@Request() req) {
    return this.userService.user({ cpf: req.user.cpf });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ where: { id: Number(id) }, data: {} });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
