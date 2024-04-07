import mongoose from 'mongoose';
//function to connect to the DB
export async function dbconnect() {
  try {
    const connection = await mongoose.connect(string(process.env.MONGO_URI));
    return connection;
  } catch (error) {
    console.log(error);
  }
}
