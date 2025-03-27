import mongoose from "mongoose";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const cached=(global as any).mongoose || {conn:null,promise:null};

export const connectToDatabase= async (
    MONGODB_URL=process.env.MONGODB_URL
)=>{
   if(cached.conn)
    return cached.conn; 
   if(!MONGODB_URL) throw new Error("MONGODB_URL is missing");

   cached.process=cached.promise || mongoose.connect(MONGODB_URL)

   return cached.conn
}