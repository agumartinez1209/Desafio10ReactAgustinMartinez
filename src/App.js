import NavBar from "./components/NavBar";

import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Productos from "./Routes/Productos";
import Novedades from "./Routes/Novedades";
import Nosotros from "./Routes/Nosotros";
import Contacto from "./Routes/Contacto";

import ItemDetailContainer from "./components/ItemDetailContainer";
import MyProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  

  
  return (<div>
    <BrowserRouter>
    <MyProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer  /> } />
        <Route path="/home" element={<ItemListContainer  /> } />
        <Route path="/Productos" element={<Productos /> } />

        <Route 
        path="/categoria/armado" 
        element={<ItemListContainer categoria={"armado"} /> } 
        />

        <Route 
        path="/categoria/accesorio"
         element={<ItemListContainer categoria={"accesorio"} />} 
         />
        <Route path="/Novedades" element={<Novedades /> } />
        <Route path="/Nosotros" element= {<Nosotros />} />
        <Route path="/Contacto" element= {<Contacto />} />
        <Route path="Productos/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart /> } />  
      </Routes>
      
      
      </MyProvider>
      </BrowserRouter>
  </div>
  );
}

export default App;
