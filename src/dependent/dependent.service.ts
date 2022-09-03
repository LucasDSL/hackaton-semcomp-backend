import { Injectable } from '@nestjs/common';
import { Dependent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DependentService {
  constructor(private prisma: PrismaService) {}

  async dependent(
    userWhereUniqueInput: Prisma.DependentWhereUniqueInput,
  ): Promise<Dependent | null> {
    return this.prisma.dependent.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async dependents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DependentWhereUniqueInput;
    where?: Prisma.DependentWhereInput;
    orderBy?: Prisma.DependentOrderByWithRelationInput;
  }): Promise<Dependent[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dependent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDependent(
    responsibleCpf: number,
    data: Prisma.DependentCreateInput,
  ): Promise<Dependent> {
    return this.prisma.dependent.create({
      data,
    });
  }

  async updateDependent(params: {
    where: Prisma.DependentWhereUniqueInput;
    data: Prisma.DependentUpdateInput;
  }): Promise<Dependent> {
    const { where, data } = params;
    return this.prisma.dependent.update({
      data,
      where,
    });
  }

  async deleteDependent(
    where: Prisma.DependentWhereUniqueInput,
  ): Promise<Dependent> {
    return this.prisma.dependent.delete({
      where,
    });
  }
}
