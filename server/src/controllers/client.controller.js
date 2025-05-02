import Clients from "../models/clients.js";
import { models } from "../models/init-models.js";

export const getAllClients = async (req, res) => {

    console.log("llego")

    try {
        const allClients = await Clients.findAll();

        if (allClients.length === 0) {
            return res.status(404).json({
                code: 404,
                message: "❌ no clients registered in the DB"
            })
        }

        res.status(200).json({
            code: 200,
            message: "✅ clients retrived successfully",
            data: allClients
        })
    } catch (error) {
        console.error(error, "Error in getting all clients");
        res.status(500).json({
            code: 500,
            message: "❌ Error retribing clients data"
        })
    }
};

export const createClient = async (req, res) => {
    try {
        const { id, name, email, job, rate, isactive } = req.body;
        if (!name || !email || !job || !rate || !isactive) {
            return res.status(400).json({
                code: 400,
                message: "❌ All fields are required"
            });
        }

        const existingClient = await Clients.findOne({ where: { email } });
        if (existingClient) {
            return res.status(400).json({
                status: 400,
                message: "❌ There is already an Client with that email"
            })
        }

        const client = await Clients.create({
            id,
            name,
            email,
            job,
            rate,
            isactive
        })

        res.status(201).json({
            code: 201,
            message: "✅ Client craeted successfully",
            data: client
        })

    } catch (error) {
        console.error(error, "Error on craeting a new client");
        res.status(500).json({
            code: 500,
            message: "❌ Error at create new client",
        });
    }
};

export const getClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await Clients.findByPk(id);
        if (!animal) {
            return res.status(404).json({
                code: 404,
                message: "🔴 Client not found"
            });
        }

        res.status(200).json({
            code: 200,
            message: "✅ Client retrived successfully",
            data: client
        })

    } catch (error) {
        console.error(error, "Error on getting client by id");
        res.status(500).json({
            code: 500,
            message: "🔴 Error on get client by id"
        })

    }
}

export const updateClients = async (req, res) => {
    try {
        const { id } = req.params

        const updateClient = await Clients.update(req.body, {
            where: { id },
            returning: true
        });

        res.status(200).json({
            code: 200,
            message: "✅ Client updated successfully",
            data: updateClient
        })
    } catch (error) {
        console.error(error, `Cannot update client with id: ${id}`)
        res.status(500).json({
            code: 500,
            message: "🔴 Error on updating client"
        })
    }
}

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Clients.findByPk(id);
        if (!client) {
            return res.status(404).json({
                code: 404,
                message: "🔴 Client not found"
            });
        }

        await Animal.destroy({ where: { id } })
        res.status(200).json({
            code: 200,
            message: "✅ Client deleted successfully"
        });
    } catch (error) {
        console.error(error, "Error on deleting client")
        res.status(200).json({
            code: 500,
            message: "🔴 Error at deleting a client"
        })
    }
}