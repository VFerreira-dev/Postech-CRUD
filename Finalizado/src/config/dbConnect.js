import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carregue as variáveis de ambiente do arquivo .env
dotenv.config();

async function conectaNaDatabase() {
    const uri = process.env.DB_CONNECTION_STRING || "mongodb+srv://fabriciorosafacul:6CPNqxYhXIg1ugjP@cluster0.pbkk3to.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    
    try {
        await mongoose.connect(uri);
        console.log('Conexão bem-sucedida com o banco de dados');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
    
    return mongoose.connection;
}

export default conectaNaDatabase;
