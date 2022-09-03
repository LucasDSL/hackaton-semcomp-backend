import { Controller, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DependentService } from './dependent.service';

@Controller('dependent')
export class DependentController {
  constructor(private readonly dependentService: DependentService) {}

  @Post()
  create(@Body() createDependentDto: Prisma.DependentCreateInput) {
    return this.dependentService.createDependent(createDependentDto);
  }
}
