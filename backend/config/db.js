import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vaibhav2121:Vaibhav2121@cluster0.nsa6cqa.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}