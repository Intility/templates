import { Router } from 'express';
import healthRoute from './api/health/health.router';
import userRoute from './api/users/user.router';

// make new Router()
const baseRouter = Router();

// use userRouter
baseRouter.use('/health', healthRoute);
baseRouter.use('/users', userRoute);

export default baseRouter;
