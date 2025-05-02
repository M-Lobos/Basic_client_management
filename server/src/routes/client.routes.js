import { Router } from "express";

import {
    createClient,
    getAllClients
} from "../controllers/client.controller.js"

const router = Router();

router.get("/test", (req, res) => {
    res.send("<h1>Server up! 🚀🚀🚀 </h1>")
})

router.get("/clients", getAllClients);
router.post("/clients", createClient);

export default router