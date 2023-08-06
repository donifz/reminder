import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}
    async create(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto);
        return user;
    }

    async findAll() {
        const users = await this.userRepository.findAll();
        return users;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
