import { Router } from 'express';
import { HealthController } from './health.controller';

// Create a new base route
const healthRoute = Router();

// Create controller
const healthController = new HealthController();

/**
 * GET /api/v1/health/server
 * @summary Get Server Health
 * @tags Health
 * @return {HealthDto} 200 - success response - application/json
 */
healthRoute.get('/server', healthController.getServerHealth);

export default healthRoute;
