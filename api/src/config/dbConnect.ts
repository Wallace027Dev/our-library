import mongoose, { mongo } from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING!);
    console.log("Conexão bem-sucedida com o MongoDB.");

    return mongoose.connection;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error;
  }
}

export default connectToDatabase;
