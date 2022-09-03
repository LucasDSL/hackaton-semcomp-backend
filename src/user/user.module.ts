import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShotModule } from 'src/shot/shot.module';
import { ShotService } from 'src/shot/shot.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => ShotModule), PrismaModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, ShotService],
})
export class UserModule {}
