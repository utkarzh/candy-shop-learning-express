const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "sharpener_practice",
  "root",
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);
module.exports = sequelize;
