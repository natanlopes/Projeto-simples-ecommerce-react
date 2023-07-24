import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./catalogo";
import Layout from "./layout";
import Carrinho from "./carrinho";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([])

  function addToCart(item){
    setCart([...cart, item])
    console.log('item adicionado')
    console.log(cart)
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element = { <Layout cart={cart}/> }>
          <Route index element = { <Catalogo addToCart={addToCart} /> }/>
          <Route path="/carrinho" element = { <Carrinho cart={cart} />} />
        </Route>

      </Routes>
    </BrowserRouter> 
  );
}

export default App