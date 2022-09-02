import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(cpf: string, password: string): Promise<any> {
    const user = await this.userService.user({ cpf });
    if (user && compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { cpf: user.cpf, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
