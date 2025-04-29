import { Sequelize } from "sequelize";
import { config } from "./env.config.js";

const { host, user, pass, name, dialect, port } = config.db

if (!host || !user || !pass || !name || !dialect || !port){
    console.error("Need all parameters for contecting DB", error)
}

export const dbConfig = new Sequelize(
    name, 
    user, 
    pass,
    {
        host, 
        dialect,
        port,
        logging: console.log()
    }
);

