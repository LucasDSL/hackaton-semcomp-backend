import { Module } from '@nestjs/common';
import { DependentService } from './dependent.service';
import { DependentController } from './dependent.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DependentController],
  providers: [DependentService, PrismaService],
})
export class DependentModule {}
