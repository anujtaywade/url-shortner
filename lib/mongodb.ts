import mongoose from 'mongoose'

export const connectDb = async(): Promise<void> => {
  try {
    if(mongoose.connection.readyState === 1 ){
      return ;
    }

    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("connected to DB")
  } catch (error) {
    console.log("failed to connect to DB",error)
  }
}
