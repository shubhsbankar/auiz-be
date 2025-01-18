import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/quiz");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
};


