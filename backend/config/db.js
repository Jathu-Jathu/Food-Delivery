import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jtshaa17:1234@cluster0.y11i7b4.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}