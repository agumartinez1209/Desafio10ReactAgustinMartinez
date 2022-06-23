import { createContext,useState } from 'react'


export const CartContext = createContext ({});


const {Provider} = CartContext;


const MyProvider = ({children}) =>{


const [cart, setCart] = useState();
//itemDetail
const isInCart = (id) => {
  return cart.some(x => x.id === id)
}
////itemDetail
const addItem = (item, count) => {
  const newItem = {
    ...item,
    count
  }

  if(isInCart(newItem.id)){
    const findProduct = cart.find (x => x.id === newItem.id)
    const productIndex = cart.indexOf(findProduct)
    const auxArray = [...cart]
    auxArray [productIndex].count += count
    setCart (auxArray)
  }else{
    setCart([...cart],newItem)
  }
}


//Cart
const emptyCart = () => {
  setCart ([])
}
//Cart
const deleteItem = (id) => {
  return setCart(cart.filter(x => x.id !== id))
}
//Cart Item
const getItemQty = () => {
  return cart.reduce((acc, x) => acc += x.count, 0 )
}
//Cart
const getItemPrice = () => {
  return cart.reduce((acc,x) => acc+= x.count * x.precio, 0)
} 




return <Provider value={{isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice,cart}}>
{children}
  </Provider>
}



export default MyProvider