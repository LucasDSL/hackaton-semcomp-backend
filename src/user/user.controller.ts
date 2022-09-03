import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findSelf(@Request() req) {
    return this.userService.user({ cpf: req.user.cpf });
  }

  @UseGuards(JwtAuthGuard)
  @Post('shot/:id')
  createSpecificShot(@Request() req, @Param('id') specificShotId: string) {
    return this.userService.createWithSpecificShot(
      req.user.cpf,
      +specificShotId,
    );
  }

  @Post('shot')
  createShot(@Body() createShotDto) {}
}
