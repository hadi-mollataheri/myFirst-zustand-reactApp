import Cart from "./Cart";
import ProductList from "./ProductList";
import { PRODUCTS } from "./products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='flex flex-col items-center justify-center my-5'>
      <h3 className='font-bold'>Welcome to the Store </h3>
      <ProductList products={PRODUCTS} setCart={setCart} />
      <Cart setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
