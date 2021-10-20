import mongoose  from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true,
            
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);  //cyan.underline from colors module installed

    }
    catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        console.exit(1);

    }
}

export default connectDB;