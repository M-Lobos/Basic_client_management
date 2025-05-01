import { dbConnection } from "./dbConnection.js";

export const serverInit = async (app, PORT) => {
    try {
        console.log("conecting DB...");
        await dbConnection()
        app.listen(PORT, () => {
            console.log(`✅ Server running at port ${PORT}`)
        })
    } catch (error) {
        console.error("Error conecting to server", error)
    }
};

