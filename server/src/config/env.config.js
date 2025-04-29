import dotenv from "dotenv"

dotenv.config();

export const config = {
    port: process.env.PORT || 3001,
    secretKey: process.env.SECRET_KEY,
    db: {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    }
}