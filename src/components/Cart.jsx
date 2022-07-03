import React from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

function Cart() {


  const { cart, deleteItem, getItemQty, getItemPrice, emptyCart } = useContext(CartContext);



  return (

    <>
      {getItemQty() > 0 ?
        <div>

          <section className="h-100" >
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0 text-black">Carrito</h3>
                    <div>

                    </div>
                  </div>
                  {cart.map(item => (
                    <div className="card rounded-3 mb-4">
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.imagen}
                              className="img-fluid rounded-3"
                              alt={"producto"}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.texto}</p>
                            <p>
                              <span className="text-muted">Cantidad: </span>{item.count} <br></br>
                              <span className="text-muted">Precio: </span>${item.precio}
                            </p>
                          </div>

                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">Subtotal: $ ${item.count * item.precio} </h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a onClick={() => deleteItem(item.id)} className="text-danger">
                              <i /><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    className="d-flex justify-content-between p-2 mb-2"
                    style={{ backgroundColor: "#e1f5fe" }}
                  >
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">$ {getItemPrice()} ({getItemQty()} Producto/s)</h5>
                  </div>
                  <div className="card">
                    <div className="card-body">
                    <Link to="/checkout/" >
                      <button type="button" className="btn btn-outline-success margin-left">
                        Procesar Pago
                      </button>
                      </Link>
                      <button type="button" className="btn btn-outline-success margin-left" onClick={emptyCart}>
                        Vaciar Carrito
                      </button>
                      <Link to="/Productos" >
                        <button type="button" className="btn btn-outline-success margin-left">
                          Agregar mas Productos
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        :
        <div className="card">
          <div className="text-center">
            <p>EL CARRITO ESTA VACIO!!!</p>
            <Link to="/Productos" >
              <button type="button" className="btn btn-outline-success">
                Volver Atras
              </button>
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default Cart