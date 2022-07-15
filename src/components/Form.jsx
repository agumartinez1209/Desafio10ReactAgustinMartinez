import React from 'react'
import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Form() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");


  const db = getFirestore()
  const messageCollection = collection(db, 'messages');;

  function handleClick() {
    const message = {
      user: { name, lastname, email, title, text   },
      case: title,
      message: text,

    }
    if(!name){
      return alert("Ingrese un Nombre")
  }
  else if(!lastname){
      return alert("ingrese un Apellido.")
  }
  else if(!email){
      return alert("ingrese un correo.")
  }
  else if(!title){
      return alert("ingrese una Direccion.") 
  }
  else if(!text){
      return alert("ingrese un telefono")
  }


    addDoc(messageCollection, message).then(({ id }) => {
      setSubject(id);
      console.log(id);
    });


  }
  return <>
    {!subject ?
      <div className="container-fluid">
        <div className="container">
          <div>
            <h1 className="text-center mb-5 shadow-sm p-3 color">CONTACTO</h1>
          </div>
          <div className="row">
            <div className="col-md-7 shadow rounded p-5 mt-5  mx-auto ">
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label color">Nombre</label>
                  <input onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Nombre" />
                </div>
                <div className="col mb-3">
                  <label className="form-label color">Apellido</label>
                  <input onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label color">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="nombre@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label color">Asunto</label>
                <input onChange={(e) => setTitle(e.target.value)}
                  type="text" 
                  className="form-control" 
                  placeholder="Asunto" />
              </div>
              <div className="mb-3">
                <label className="form-label color">Mensaje:</label>
                <textarea onChange={(e) => setText(e.target.value)}
                  name=""
                  className="form-control"
                  rows={3}
                  placeholder="Escriba aqui"
                  defaultValue={""}
                />
              </div>
              
              <button onClick={() => handleClick()}
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      :
      <div className="card">
        <div className="text-center">
          <h1>Gracias por contactarnos</h1>
          <p>Tu codigo de contacto es: {subject}</p>
          <Link to="/Productos" >
            <button type="button" className="btn btn-outline-success">
              Volver Atras
            </button>
          </Link>
        </div>
      </div>
    }
  </>


}

export default Form