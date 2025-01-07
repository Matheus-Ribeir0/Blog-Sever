require('dotenv').config(); // Carrega as variáveis do .env

module.exports = {
  development: {
    url: process.env.DATABASE_URL, // Pega a URL do .env
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
