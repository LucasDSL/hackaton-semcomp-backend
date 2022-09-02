import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/client/index';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async (): Promise<void> => {
      await app.close();
    });
  }
}