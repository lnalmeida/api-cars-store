import { Schema } from "mongoose";
import mongoose from 'mongoose';

const carModel = new Schema({
    marca: String,
    modelo: String,
    versao: String,
    cambio: String,
    placa: String || null,
    ano: Number,
    KMs: Number,
    precoVenda: Number,
}, {timestamps:true});

export default mongoose.model('Car', carModel);


/*
    marca, 
    modelo, 
    versao, 
    cambio, 
    placa, 
    ano, 
    KMs, 
    precoVenda,

*/