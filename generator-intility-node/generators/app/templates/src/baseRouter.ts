import { Router } from 'express';
import userRoute from './api/users/user.router';

// make new Router()
const baseRouter = Router();

// use userRouter
baseRouter.use('/users', userRoute);

export default baseRouter;
