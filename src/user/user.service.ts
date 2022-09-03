import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { ShotService } from 'src/shot/shot.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private shotService: ShotService,
  ) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: { shotsTakenByUser: true },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    data.password = hashSync(data.password, 8);
    return this.prisma.user.create({
      data,
    });
  }

  async createWithSpecificShot(
    userCpf: string,
    specificShotId: number,
  ): Promise<any> {
    const existShot = await this.shotService.shot({ id: specificShotId });
    if (!existShot) {
      throw new HttpException('Vaccine not found', HttpStatus.NOT_FOUND);
    }

    const user = await this.user({ cpf: userCpf });

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        shotsTakenByUser: { connect: { id: specificShotId } },
      },
    });
  }

  async createShotForUser(
    userCpf: string,
    createShotDto: Prisma.ShotCreateInput,
  ) {
    const newShot = await this.shotService.createShot(createShotDto);

    return this.prisma.user.update({
      where: { cpf: userCpf },
      data: {
        shotsTakenByUser: { connect: { id: newShot.id } },
      },
    });
  }
}
