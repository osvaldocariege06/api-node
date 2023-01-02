
const mongoose = require('mongoose')


const connectToDatabase = async() => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@api-nodejs.iwc9bnv.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if(error){
                return console.log(
                    'Ocorreu um erro ao se conectar com o banco de dados',
                    error
                );
            }

            return console.log('Conexão ao banco de dados realizada com sucesso!')
        }
    )
}

module.exports = connectToDatabase;


// Endereço IP atual ( 102.218.85.175/32 ) adicionado!
// Visite Network Access para modificar suas configurações.