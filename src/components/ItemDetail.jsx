<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';



const ItemDetail = ({ texto, imagen, categoria, precio}) => {

const [unidades, setUnidades] = useState();

const onAdd = (count) => {
  // alert(count);
  setUnidades(count);

}


    return (
      <>

      <div className="container container-detail">
        <div className="row">
          <div className="col-12 col-sm-6 pt-5">
            <Link to="/Productos" className=" nav-tipografia nav-link active"> Volver Atras</Link>
            <div className="card mb-3 card-style">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={imagen} className="img-fluid img-detail" />
                </div>
                <div className="col-md-8 col-sm-6 pt-5">
                  <div className="card-body">
                    <h5 className="card-title card-title-detail">{texto}</h5>
                    <p className="card-text card-detail mt-3  mb-5 shadow-sm p-3">Categoria: {categoria}</p>
                    <p className="card-text price-detail  mb-5 shadow-sm p-3 ">Precio: ${precio}</p>
                    {unidades >0? <Link to={"/cart"} className="btn btn-outline-success"> Finalizar compra </Link>:<ItemCount inicial ={1} maximo = {20} onAdd ={onAdd}/> }

=======
import React from 'react'

const ItemDetail = ({id, name, image, species, status}) => {
    return (
        <>
    
          <div className="container container-detail">
            <div className="row">
              <div className="col-12 col-sm-6 pt-5">
                <div className="card mb-3 card-style">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={image} className="img-fluid img-detail" />
                    </div>
                    <div className="col-md-8 col-sm-6 pt-5">
                      <div className="card-body">
                        <h5 className="card-title card-title-detail">{name}</h5>
                        <p className="card-text card-detail mt-3">{species}</p>
                        <p className="card-text card-detail mt-3">{status}</p>
                        
                        
                        <div className="d-flex gap-3 justify-content-center mt-3">
                            <button  type="button" className="btn card-btn">-</button>
                            <h2>1 </h2>
                            <button type="button" className=" btn card-btn">+</button>
                        </div>
                        <button type="button" className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5">Agregar al Carrito</button>
                      </div>
                    </div>
>>>>>>> 0be3c50ae0c2723522ed2c5a4a17005d5bd43e90
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>


    </>
=======
    
    
        </>
>>>>>>> 0be3c50ae0c2723522ed2c5a4a17005d5bd43e90
      );
    };

export default ItemDetail