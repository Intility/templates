import { Router } from 'express';
import healthRoute from './api/health/health.router';

// make new Router()
const baseRouter = Router();

// use userRouter
baseRouter.use('/health', healthRoute);

export default baseRouter;
