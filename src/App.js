import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import LogoNavBar from "./components/LogoNavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  
  const onAdd = (count) => {
    alert(count);

  }
  
  return (<div>

      <NavBar />
      <ItemListContainer titulo={"NUESTROS PRODUCTOS"} />
      <LogoNavBar />
      <ItemCount inicial ={1} maximo = {20} onAdd ={onAdd} />
      
  </div>
  );
}

export default App;
