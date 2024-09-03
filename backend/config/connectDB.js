const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_URI = `mongodb+srv://Rayees:Ray786ees92@cluster0.yqanomk.mongodb.net/`;
    try{
        mongoose.set("strictQuery", false);
        const connect = await   mongoose.connect(MONGO_URI);
        console.log(`Mongo db connected`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB