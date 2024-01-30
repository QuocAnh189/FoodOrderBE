import mongoose from 'mongoose';
import { exit } from 'process';
import { MONGO_URI } from './configEnv';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI!);
    return connect;
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

export { connectDB };
