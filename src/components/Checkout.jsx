import React, { useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


function Checkout() {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");
    const [purchase, setPurchase] = useState("");

    const { cart, getItemQty, getItemPrice, } = useContext(CartContext);

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders');;

    
    function handleClick(){
        const order ={
            buyer:{name, lastname, email, mail, tel},
            items: cart,
            total:getItemPrice(),

        };

        addDoc(ordersCollection, order).then(({id}) => {
            setPurchase(id);
            console.log(id);
          });
    }

    


    return (
        <>
   
                <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Tu Carrito</span>
                        </h4>
                        {cart.map(item => (
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{item.texto}</h6>
                                        <small className="text-muted">Cantidad : {item.count}</small>
                                    </div>
                                    <span className="text-muted">${item.count * item.precio}</span>
                                </li>
                            </ul>

                        ))}
                        <ul className="list-group mb-3">
                            <hr className="mb-4" />
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>${getItemPrice()} ({getItemQty()}Producto/s)</strong>
                            </li>
                        </ul>


                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Datos</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">Nombre</label>
                                    <input onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Por favor completar el nombre.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Apellido</label>
                                    <input onChange={(e) => setLastname(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Por favor completar el apellido.</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    Email <span className="text-muted"></span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="you@example.com"
                                />
                                <div className="invalid-feedback">
                                    Por favor, coloca una direccion de email valida.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Direccion</label>
                                <input onChange={(e) => setMail(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 Main St"
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Por favor coloca una direccion valida.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2">
                                    Direccion 2 <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                />
                            </div>
                            
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Telefono</label>
                                    <input onChange={(e) => setTel(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="cc-number"
                                        placeholder=""
                                        required=""
                                    />
                                    <div className="invalid-feedback"> Por favor coloca un numero de telefono</div>
                                </div>
                           

                            <hr className="mb-4" />
                            <Link to="/checkout" >
                            <button onClick={() => handleClick()} className="btn  btn-outline-success btn-lg btn-block" >
                                Finalizar
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}


export default Checkout