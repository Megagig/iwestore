import mongoose from 'mongoose';
//function to connect to the DB
export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    return connection;
  } catch (error) {
    console.log(error);
  }
}
