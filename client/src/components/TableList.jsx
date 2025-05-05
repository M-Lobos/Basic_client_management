import axios from "axios";
import { useState, useEffect } from "react";


export default function TableList({ handleOpen, searchTerm }) {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/clients");
                setTableData(response.data.data);
            } catch (error) {
                setError(error.message);

            }
        };

        fetchData();

    }, []);

    /* const clients = [{
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        job: "web developer",
        rate: 100,
        isactive: true
    },
    {
        id: 2,
        name: "Rogrigo Rodriguez",
        email: "rrodriguez@gmail.com",
        job: "front-end",
        rate: 100,
        isactive: true
    },
    {
        id: 3,
        name: "Blanca Clara",
        email: "bclara@gmail.com",
        job: "back-end",
        rate: 100,
        isactive: false
    }

    ] */

    const filteredData = tableData.filter((client) => {
        return (
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.job.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });


    return (
        <>
            {error && <div className="alert alert-error shadow-lg mt-10">{error}</div>}
            <div className="overflow-x-auto mt-10 p-4">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr className="text-center">
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>job</th>
                            <th>rate</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody className="hover:bg-base-300 text-center">
                        {/* row 1 */}
                        {filteredData.map((client) => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td> {/* conditional button to change states on clients */}
                                    <button className={`btn rounded-full w-25 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                        {client.isactive ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleOpen("edit")} className="btn btn-secondary">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-accent">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}