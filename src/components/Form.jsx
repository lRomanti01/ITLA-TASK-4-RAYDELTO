import React, { useState } from "react";
import { sendData } from "../methodsHttp";
import '../stylesheets/Form.css'

const Form = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || lastName === '' || number === ''){
      alert('Debes llenar todos los campos')
    } else  {
      sendData(dataToSend)
      setName('')
      setLastName('')
      setNumber('')
    }
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }


  const dataToSend = {
    nombre: name,
    apellido: lastName,
    telefono: number
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label className="form-item">Nombre</label>
        <input className="form-item" type="text" id="nombre" value={name} onChange={handleChangeName}/>
      </div>
      <div>
        <label className="form-item">Apellido</label>
        <input className="form-item" type="text" id="apellido" value={lastName} onChange={handleChangeLastName}/>
      </div>
      <div>
        <label className="form-item">Numero</label>
        <input className="form-item" type="text" id="numero" value={number} onChange={handleChangeNumber}/>
      </div>
      <div>
        <label style={{color: '#202b38'}}>.</label>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default Form;