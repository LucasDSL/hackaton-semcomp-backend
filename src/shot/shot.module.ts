import { Module } from '@nestjs/common';
import { ShotService } from './shot.service';
import { ShotController } from './shot.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ShotController],
  providers: [ShotService, PrismaService],
  exports: [ShotService],
})
export class ShotModule {}
