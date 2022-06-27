import mongoose from "mongoose";

const tiktokSchema =  mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String, // number?
    messages:String,
    description:String,
    shares:String  // number?
})

//Collection inside the database
export default mongoose.model('tikTokVideo', tiktokSchema)