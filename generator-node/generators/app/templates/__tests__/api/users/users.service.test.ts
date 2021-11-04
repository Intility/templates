import { internet } from 'faker';
import { CreateUserDto } from '../../../src/api/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../src/api/users/dto/update-user.dto';
import { UserService } from '../../../src/api/users/user.service';

/* 
NOTE: Since this service doesn't do any logic at all, it is extremely dumb.
*/

describe('UserService', () => {
    it('Should find a user by its OID', async () => {
        const service = new UserService();
        const mockOid = '<mockOid>';

        const response = await service.getByOid(mockOid);
        expect(response).toStrictEqual(expect.any(String));
    });

    it('Should find all Users', async () => {
        const service = new UserService();

        const response = await service.getAll();
        expect(response).toStrictEqual(expect.any(String));
    });

    it('Should create a new User', async () => {
        const service = new UserService();
        const userInput: CreateUserDto = {
            age: 18,
            username: internet.userName(),
            password: internet.password()
        };

        const response = await service.createUser(userInput);
        expect(response).toStrictEqual(expect.any(String));
    });

    it('Should update a user by its OID', async () => {
        const service = new UserService();
        
        const mockOid = '<mockOid>';
        const userInput: UpdateUserDto = {
            username: internet.userName()
        };

        const response = await service.updateUser(mockOid, userInput);
        expect(response).toStrictEqual(expect.any(String));
    });
    
    it('Should delete a user by its OID', async () => {
        const service = new UserService();

        const mockOid = '<mockOid>';

        const response = await service.deleteUser(mockOid);
        expect(response).toStrictEqual(expect.any(String));
    });
});
