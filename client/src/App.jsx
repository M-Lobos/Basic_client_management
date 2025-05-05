
import { useState } from 'react';
import './App.css';
import ModalForm from './components/ModalForm.jsx';
import Navbar from './components/Navbar.jsx';
import TableList from './components/TableList.jsx';
import axios from "axios";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");


  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("ModalMode add")
    } else {
      console.log("ModalMode edit")
    }
  }

  return (

    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </>
  )
}

export default App
