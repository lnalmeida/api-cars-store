import mongoose from 'mongoose';
import { Request, Response } from 'express';
import carModel from '../database/carModel';

const carController = {
    
    async getAllCars  (req: Request, res: Response): Promise<Response> {
        const cars = await carModel.find();
        if(!cars) {
            return res.json({message:'no there records to show!'})
        }
        return  res.json(cars)
    },
    
    async getCar (req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const car = await carModel.findById(id);
        if(!car){
            return res.json({message:'Car not registered'})
        }
        return res.json(car);
    },

    async createCar(req: Request, res: Response): Promise<Response>{
        const { marca, 
                modelo, 
                versao, 
                cambio, 
                placa, 
                ano, 
                KMs, 
                precoVenda
            } = req.body;

        try{ 
            await carModel.create({
                marca, 
                modelo, 
                versao, 
                cambio, 
                placa, 
                ano, 
                KMs, 
                precoVenda
            }, carModel)
        } catch (err: any) {
            return  res.json({message: err.message})
        }

        return res.json({message: 'Car registered successfully'})

    },

    async updateCar (req: Request, res: Response) {
        const { id } = req.params;
        const { marca, 
            modelo, 
            versao, 
            cambio, 
            placa, 
            ano, 
            KMs, 
            precoVenda
        } = req.body;

        try {
            const car = await carModel.findByIdAndUpdate(id, 
                {
                    marca, 
                    modelo, 
                    versao, 
                    cambio, 
                    placa, 
                    ano, 
                    KMs, 
                    precoVenda
                }
            );

            return res.json(car);

        } catch (err: any){
            return res.json({message:err.message});
        }

    },

    async deleteCar (req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            await carModel.findByIdAndDelete(id);
            return res.json({message:'Car deleted successfully'});
        } catch(err: any) {
            res.json({message: err.message});
        }
    }

}

export default carController;