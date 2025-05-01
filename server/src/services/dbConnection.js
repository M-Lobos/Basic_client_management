import { dbConfig } from "../config/db.config.js";
import { models } from "../models/init-models.js";

export const dbConnection = async () => {
    try {
        await dbConfig.authenticate();
        if (models)
            console.log("✅ Models initialized")
        await dbConfig.sync({ alter: true });
    } catch (error) {
        console.error("Unable to connect database", error)
    }
}