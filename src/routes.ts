import { Router, Request, Response } from 'express';
import carsController from './controllers/carsController';



const router = Router();    

router.get('/cars', carsController.getAllCars);

router.get('/cars/:id', carsController.getCar);

router.post('/cars/newcar', carsController.createCar);

router.put('/cars/:id', carsController.updateCar);

router.delete('/cars/:id', carsController.deleteCar);

export default router;