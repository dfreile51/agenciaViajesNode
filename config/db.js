import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_URL, {
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000,
    },
    operatorAliases: false,
});

export default db;
