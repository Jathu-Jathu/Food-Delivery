import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jtshaa17:171717@cluster0.akosh.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}