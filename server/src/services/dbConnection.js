import { dbConfig } from "../config/db.config.js";
/* models */

export const dbConnection = async () => {
    try {
        await dbConfig.authenticate();
        /* models */
        await dbConfig.sync({ alter: true });
    } catch (error) {
        console.error("Unable to connect database", error)
    }
}