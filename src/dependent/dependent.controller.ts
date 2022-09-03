import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { DependentService } from './dependent.service';

@Controller('dependent')
export class DependentController {
  constructor(private readonly dependentService: DependentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('user')
  create(
    @Request() req,
    @Body() createDependentDto: Prisma.DependentCreateInput,
  ) {
    return this.dependentService.createDependent(
      req.user.cpf,
      createDependentDto,
    );
  }
}
