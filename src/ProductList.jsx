/* eslint-disable react/prop-types */
const ProductList = ({ products, setCart }) => {
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
            onClick={() => setCart((cart) => [...cart, product])}
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
