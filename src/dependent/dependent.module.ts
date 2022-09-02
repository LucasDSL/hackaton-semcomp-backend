import { Module } from '@nestjs/common';
import { DependentService } from './dependent.service';
import { DependentController } from './dependent.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DependentController],
  providers: [DependentService, PrismaService],
})
export class DependentModule {}
