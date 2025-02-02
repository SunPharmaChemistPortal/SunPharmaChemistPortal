import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URI)
        // console.log("connected to database")
    }catch(e){
        console.log(e)
    }
}