import mongoose from "mongoose";

const tiktokSchema =  mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:Number, // number?
    messages:Number,
    description:String,
    shares:Number  // number?
})

//Collection inside the database
export default mongoose.model('tikTokVideo', tiktokSchema)