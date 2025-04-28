import { useState } from "react";

export default function ModalForm({ isOpen, onClose, mode, /* onSubmit */ }) {

    const [rate, setRate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === "active");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen} >
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4 text-center">{mode === "edit" ? "Update Client" : "Create new client"}</h3>
                    <form className="flex justify-center flex-col" method="dialog" onSubmit={handleSubmit}>

                        <fieldset className="fieldset w-auto bg-base-200 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend">Client information</legend>

                            <label className="label">Name</label>
                            <input type="text" className="input w-full  rounded-lg" placeholder="Client's Name" value={name} onChange={(e) => setName(e.target.value)} />

                            <label className="label" >Email</label>
                            <input type="email" className="input w-full  rounded-lg" placeholder="clientEmail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label className="label">Job</label>
                            <input type="text" className="input w-full  rounded-lg" placeholder="Client's Job" value={job} onChange={(e) => setJob(e.target.value)} />

                            <div className="flex mb-2 flex-col ">
                                <label className="label mb-2 mt-2">Rate</label>
                                <input type="number" className="input w-full rounded-lg" placeholder="Client's rate" value={rate} onChange={(e) => setRate(e.target.value)} />

                                <label className="label mb-2 mt-2">Status</label>
                                <select value={status ? "Active" : "Inactive"} className="w-full  rounded-lgl select select-primary" onChange={handleStatusChange}>
                                    <option disabled={true}>Select Status</option>
                                    <option>Inactive</option>
                                    <option>Active fork</option>
                                </select>
                            </div>

                        </fieldset>
                        <br />
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose} >✕</button>
                        <button className="btn btn-success">{mode === "edit" ? "Save changes" : "Create"}</button>
                    </form>


                </div>
            </dialog>
        </>
    )
}

