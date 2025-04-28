export default function TableList({ handleOpen }) {

    const clients = [{
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

    ]

    return (
        <>
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
                            {/* <th></th>
                            <th></th> */}
                        </tr>
                    </thead>
                    <tbody className="hover:bg-base-300 text-center">
                        {/* row 1 */}
                        {clients.map((client) => (
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