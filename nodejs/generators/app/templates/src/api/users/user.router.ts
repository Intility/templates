import { UserService } from './user.service';
import { authenticate, authorize } from '../../middlewares/passport';
import { UserController } from './user.controller';
import { Router } from 'express';

// Create a new base route
const userRoute = Router();

// Create controller
const userService = new UserService();
const userController = new UserController(userService);

// Create routes for CRUD
/**
 * GET /api/v1/users/{oid}
 * @param {string} oid.path - users ObjectID
 * @summary Get a User by its Object ID
 * @tags Users
 * @return {User} 200 - success response - application/json
 * @security OAuthStrategy
 */
userRoute.get('/:oid', authenticate, authorize([ 'Api.Read', 'Api.Write', 'Api.Admin' ]), userController.getByOid);

/**
 * GET /api/v1/users/
 * @summary Get all Users
 * @tags Users
 * @return {array<User>} 200 - success response - application/json
 * @security OAuthStrategy
 */
userRoute.get('/', authenticate, authorize([ 'Api.Read', 'Api.Write', 'Api.Admin' ]), userController.getAll);

/**
 * POST /api/v1/users
 * @param {UserInput} request.body.required - Create User DTO
 * @summary Create a new User entity
 * @tags Users
 * @return {User} 200 - success response - application/json
 * @security OAuthStrategy
 */
userRoute.post('/', authenticate, authorize([ 'Api.Write', 'Api.Admin' ]), userController.create);

/**
 * DELETE /api/v1/users/{oid}
 * @param {string} oid.path - users ObjectID
 * @summary Delete an user by its ObjectID
 * @tags Users
 * @return {User} 200 - success response - application/json
 * @security OAuthStrategy
 */
userRoute.delete('/:oid', authenticate, authorize([ 'Api.Admin' ]), userController.delete);

export default userRoute;
