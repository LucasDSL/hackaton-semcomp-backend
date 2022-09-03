import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ShotService } from './shot.service';
import { Prisma } from '@prisma/client';

@Controller('shot')
export class ShotController {
  constructor(private readonly shotService: ShotService) {}

  @Post()
  create(@Body() createShotDto: Prisma.ShotCreateInput) {
    return this.shotService.createShot(createShotDto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.shotService.shot({ id: +id });
  }

  @Get()
  getAll(@Query('take') take?: number, @Query('skip') skip?: number) {
    return this.shotService.shots({ take: Number(take), skip: Number(skip) });
  }
}
