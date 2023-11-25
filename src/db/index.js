import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    console.log('MONGODB_URL:', process.env.MONGODB_URL);
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URL,  // Use the environment variable directly
      {
        dbName: DB_NAME,  // Set the database name
      }
      // `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB
