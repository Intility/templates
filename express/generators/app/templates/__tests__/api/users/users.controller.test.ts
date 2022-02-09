import { UpdateUserDto } from '../../../src/api/users/dto/update-user.dto';
import { CreateUserDto } from '../../../src/api/users/dto/create-user.dto';
import { UserService } from '../../../src/api/users/user.service';
import { UserController } from '../../../src/api/users/user.controller';
import { Request, Response } from 'express';
import { internet } from 'faker';

describe('HealthController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let mockUserService: UserService;
    
    beforeEach(() => {
        req = {
            params: {},
            query: {}
        } as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        mockUserService = {
            getByOid: jest.fn(),
            getAll: jest.fn(),
            createUser: jest.fn(),
            updateUser: jest.fn(),
            deleteUser: jest.fn(),
        };
    });
    
    it('Should return get a User by its ObjectId',  async () => {
        const controller = new UserController(mockUserService);
        const mockOid = '<mockOid>';
        
        req.params!['oid'] = mockOid;
        
        // @ts-expect-error Mock request object
        await controller.getByOid(req, res as Response);

        expect(mockUserService.getByOid).toHaveBeenCalledWith(mockOid);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });
    
    it('Should return get all Users',  async () => {
        const controller = new UserController(mockUserService);
        
        // @ts-expect-error Mock request object
        await controller.getAll(req, res as Response);
        
        expect(mockUserService.getAll).toHaveBeenCalled();
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });

    it('Should create a new User',  async () => {
        const controller = new UserController(mockUserService);
        const userInput: CreateUserDto = {
            age: 18,
            username: internet.userName(),
            password: internet.password()
        };
        
        req.body = userInput;
        
        // @ts-expect-error Mock request object
        await controller.create(req, res as Response);
    
        expect(mockUserService.createUser).toHaveBeenCalledWith(userInput);
    
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();
    });
    
    it('Should update an existing User', async () => {
        const controller = new UserController(mockUserService);
        const mockOid = '<mockOid>';
        const userInput: UpdateUserDto = {
            username: internet.userName()
        };
        
        req.params!['oid'] = mockOid;
        req.body = userInput;
        
        // @ts-expect-error Mock request object
        await controller.update(req, res as Response);
    
        expect(mockUserService.updateUser).toHaveBeenCalledWith(mockOid, userInput);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });
    
    it('Should delete an existing User', async () => {
        const controller = new UserController(mockUserService);
        const mockOid = '<mockOid>';
        
        req.params!['oid'] = mockOid;
        
        // @ts-expect-error Mock request object
        await controller.delete(req, res as Response);
    
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(mockOid);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ oid: mockOid });
    });
});
