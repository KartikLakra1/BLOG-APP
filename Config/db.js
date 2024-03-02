import mongoose from 'mongoose';

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Db ${conn.connection.host}`.bgGreen.black);
    } catch (error) {
        console.log(error);
    }
}


export default connectToDb;