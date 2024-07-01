import Cart from "./Cart";
import ProductList from "./ProductList";
import { PRODUCTS } from "./products";

function App() {
  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <h3 className="font-bold">Welcome to the Store </h3>
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
