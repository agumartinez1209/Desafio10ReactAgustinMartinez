import NavBar from "./components/NavBar";
import Lista from "./components/Lista";
import ItemCount from "./components/ItemCount";


function App() {
  
  const onAdd = (count) => {
    alert(count);

  }
  
  return (<div>

      <NavBar />
      <Lista titulo={"NUESTROS PRODUCTOS"} />
      <ItemCount inicial ={1} maximo = {20} onAdd ={onAdd} />
  </div>
  );
}

export default App;
