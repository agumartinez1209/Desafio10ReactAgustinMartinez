
import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';



function ItemDetail ({ producto}) {


const {texto, imagen, categoria, precio, id, stock} = producto
const [unidades, setUnidades] = useState(true);
const [count, setCount] = useState(1)
const {isInCart, addItem} = useContext (CartContext)


const sumar = () => {
  if (count < stock) {
      setCount(count + 1)
  } else {
      alert("no puedes agregar mas productos")
  }
}

  const restar = () => {
      count > 1 ? setCount(count - 1) : alert("No puedes quitar mas productos");
      
  }

  const reset = () =>{
      setCount (1)
  }

const onAdd = (count) => {
  alert(count);
  setUnidades(false);
  isInCart(id)
  addItem(producto, count)
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
                    <p className="card-text price-detail  mb-5 shadow-sm p-3 ">stock: {stock}</p>
                    {unidades? <ItemCount sumar ={sumar} restar= {restar} reset= {reset} count= {count} onAdd ={onAdd}/> :<Link to={"/cart"} className="btn btn-outline-success"> Finalizar compra </Link> }

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