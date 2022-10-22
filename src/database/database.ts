
import { connect } from 'mongoose';

const uri = "mongodb+srv://api-car-user:00085154@cluster0.ownj9mm.mongodb.net/?retryWrites=true&w=majority";
const connection = async () => {
    try { 
        connect(uri);
        console.log('MongoDB connected!')
    } catch(err) {
        console.log('Error connecting om MongoDB', err);
    }
} 

export default connection;



