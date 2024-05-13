import mongoose from "mongoose";

export const Connect = async()=>{
    try{
        let db = await mongoose.connect(process.env.CONNECTION)
        console.log(db.connection.host, db.connection.port);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

