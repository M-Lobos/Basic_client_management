
export default function Navbar({ onOpen, onSearch }) {

    const handleSearch = (e) => {
        onSearch(e.target.value)
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm p-8">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">Clients UI</a>
                </div>
                <div className="navbar-center">
                    <div className="form-control">
                        <input type="text" placeholder="Search" onChange={handleSearch} className="input input-bordered w-48 md:w-auto" />
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary" onClick={onOpen} >Create Client</a>
                </div>
            </div>
        </>
    );
}