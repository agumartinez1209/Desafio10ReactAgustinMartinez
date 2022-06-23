
import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';



const ItemDetail = ({ texto, imagen, categoria, precio, id}) => {



const [unidades, setUnidades] = useState();



const {isInCart, addItem} = useContext (CartContext)

const onAdd = (count) => {
  // alert(count);
  setUnidades(count);
  isInCart(id)
  addItem(texto, imagen, categoria, precio, id, count)
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
      );
    };

export default ItemDetail