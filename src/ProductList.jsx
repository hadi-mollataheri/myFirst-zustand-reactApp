/* eslint-disable react/prop-types */
import { useCartStore } from "./store/cart-store";

const ProductList = ({ products }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  console.log('addToCart:', typeof addToCart)

  return (
    <div className="my-5">
      {products?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <h3 className="mt-10 font-semibold">{product.name}</h3>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="border border-black bg-slate-300 px-1"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
