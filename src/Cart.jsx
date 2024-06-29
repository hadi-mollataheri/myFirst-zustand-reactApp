/* eslint-disable react/prop-types */
const Cart = ({ cart, setCart }) => {
  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <h2 className="mt-5 font-bold">Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="my-3 flex items-center justify-center">
          <span className="mx-3 font-semibold">{product.name}</span>
          <button
            onClick={() =>
              setCart(
                cart.filter((productItem) => productItem.id !== product.id),
              )
            }
            className="border border-black bg-slate-300 px-1"
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button
          onClick={() => setCart([])}
          className="mt-5 border border-black bg-slate-400 px-1 font-semibold text-red-900"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
