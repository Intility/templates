import { UserInput } from './user.interface';
import { UserModel, UserDocument } from './user.model';

export class UserService {
    public getByOid = (oid: string): Promise<UserDocument | null> => UserModel.findById(oid).exec();
    
    public getAll = (): Promise<UserDocument[]> => UserModel.find({}).exec();

    public getByUsername = (username: string): Promise<UserDocument | null> => UserModel.findOne({ username }).exec()

    public createUser = async (user: UserInput): Promise<UserDocument> => {

        const existingUser = await this.getByUsername(user.username);
        
        if (existingUser) {
            throw new Error(`User with username: ${user.username} already exists.`);
        }

        const timestamp = new Date();

        return UserModel.create({
            username: user.username,
            password: user.password,
            age: user.age,
            isGrownUp: user.age >= 18,
            createdAt: timestamp,
        });
    }

    public deleteUser = async (oid: string): Promise<boolean> => {

        const existingUser = await this.getByOid(oid);
        
        if (existingUser) {
            throw new Error(`Cannot find user with oid: ${oid}.`);
        }

        return UserModel.findByIdAndDelete(oid).exec()
            .then(() => true)
            .catch(() => false);
    }
}
