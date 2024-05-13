import mongoose from "mongoose";

export const ConnectDB = async()=>{
    try{
        let db = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(db.connection.host, db.connection.port);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}