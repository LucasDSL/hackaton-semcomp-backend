import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Shot, Prisma } from '@prisma/client';

@Injectable()
export class ShotService {
  constructor(private prisma: PrismaService) {}

  async shot(
    shotWhereUniqueInput: Prisma.ShotWhereUniqueInput,
  ): Promise<Shot | null> {
    return this.prisma.shot.findUnique({
      where: shotWhereUniqueInput,
    });
  }

  async shots(params: {
    take?: Prisma.ShotWhereUniqueInput;
    skip?: Prisma.ShotWhereUniqueInput;
    cursor?: Prisma.ShotWhereUniqueInput;
    where?: Prisma.ShotWhereInput;
    orderBy?: Prisma.ShotOrderByWithRelationInput;
  }): Promise<Shot[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.shot.findMany({
      skip: skip ? skip.id : undefined,
      take: take ? take.id : undefined,
      cursor,
      where,
      orderBy,
    });
  }

  async createShot(data: Prisma.ShotCreateInput): Promise<Shot> {
    return this.prisma.shot.create({
      data,
    });
  }

  async updateShot(params: {
    where: Prisma.ShotWhereUniqueInput;
    data: Prisma.ShotUpdateInput;
  }): Promise<Shot> {
    const { where, data } = params;
    return this.prisma.shot.update({
      data,
      where,
    });
  }

  async deleteShot(where: Prisma.ShotWhereUniqueInput): Promise<Shot> {
    return this.prisma.shot.delete({
      where,
    });
  }
}
