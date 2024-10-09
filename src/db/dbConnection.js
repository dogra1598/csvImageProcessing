import mongoose from "mongoose";

const DB_NAME = "csvImageProcessing";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\nMONGODB connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);
  }
};
