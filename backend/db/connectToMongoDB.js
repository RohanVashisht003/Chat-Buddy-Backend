import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to mongdb");
  } catch (err) {
    console.log("Error connecting to monogdb", err.message);
  }
};
export default connectToMongoDB;
