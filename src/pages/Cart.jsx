import { useDispatch, useSelector } from "react-redux";
import { selectCart, delFromCart, selectCartTotalQty, selectCartTotalPrice } from '../features/cart/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalQty = useSelector(selectCartTotalQty);
  const totalPrice = useSelector(selectCartTotalPrice);

  const delFromCartHandler = (el) => {
    dispatch(delFromCart(el));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Carrello</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cancella
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Immagine
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Articolo
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prezzo
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Qtà
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prezzo Totale
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map((el, index) => (
              <tr key={el.id}>
                <td className="px-4 py-2">
                  <button
                    onClick={() => delFromCartHandler(el)}
                    className={`bg-red-600 text-white px-4 py-2 rounded ${el.deleting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                    disabled={el.deleting}
                  >
                    {el.deleting ? 'Cancellazione in corso...' : 'Cancella'}
                  </button>
                </td>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={el.image}
                    alt="products"
                    className="h-16 w-16 object-contain"
                  />
                </td>
                <td className="px-4 py-2">{el.title}</td>
                <td className="px-4 py-2">${el.price}</td>
                <td className="px-4 py-2">{el.qty}</td>
                <td className="px-4 py-2">${el.price * el.qty}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td className="px-4 py-3" colSpan="5"></td>
              <td className="px-4 py-3">{totalQty}</td>
              <td className="px-4 py-3">${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;



