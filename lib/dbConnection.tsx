import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
      const dbURI = process.env.MONGODB_URI;
  
      if (!dbURI) {
        throw new Error("MONGODB_URI is not defined in environment variables.");
      }
  
      await mongoose.connect(dbURI);
  
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit with failure if unable to connect to DB
    }
  };
  