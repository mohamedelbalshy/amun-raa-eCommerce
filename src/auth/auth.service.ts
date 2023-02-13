import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/singup.Input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService){

  }
  async create(signUpInput: SignupInput) {
    return 'This action adds a new auth';
  }

  async findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
