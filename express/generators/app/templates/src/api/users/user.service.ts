import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export class UserService {
    public getByOid = async (oid: string) => {
        return `This action returns a #${oid} users`;
    }
    
    public getAll = async () => {
        return 'This action returns all users';
    };

    public createUser = async (user: CreateUserDto) => {
        return 'This action adds a new users';
    }

    public updateUser = async (oid: string, updateDto: UpdateUserDto) => {
        return `This action updates a #${oid} users`;
    }

    public deleteUser = async (oid: string) => {
        return `This action removes a #${oid} users`;
    }
}
