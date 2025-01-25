import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectDB = async () => {
  try {
    //const dbUrl = process.env.MY_ONLINEDB;
    const dbUrl = process.env.MY_ONLINEDB;
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
