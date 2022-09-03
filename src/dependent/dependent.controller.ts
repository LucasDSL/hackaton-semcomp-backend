import { Controller, Post, Body, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DependentService } from './dependent.service';

@Controller('dependent')
export class DependentController {
  constructor(private readonly dependentService: DependentService) {}

  @Post('user/:userId')
  create(
    @Param(':userId') userId: string,
    @Body() createDependentDto: Prisma.DependentCreateInput,
  ) {
    return this.dependentService.createDependent(createDependentDto);
  }
}
