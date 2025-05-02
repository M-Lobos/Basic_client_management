import { Router } from "express";

import {
    createClient,
    deleteClient,
    getAllClients,
    getClientById,
    updateClients
} from "../controllers/client.controller.js"

const router = Router();

router.get("/test", (req, res) => {
    res.send("<h1>Server up! 🚀🚀🚀 </h1>")
})

router.post("/clients", createClient);
router.get("/clients", getAllClients);
router.get("/clients/:id", getClientById);
router.put("/clients/:id", updateClients);
router.delete("/clients/:id", deleteClient);

export default router