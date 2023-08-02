import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function BaseCard({ el }) {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(addToCart(el));
  };

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const truncatedDescription =
    countWords(el.description) > 20
      ? el.description
          .trim()
          .split(/\s+/)
          .slice(0, 20)
          .join(" ") + "..."
      : el.description;

  return (
    <div className="border p-4 m-2 flex flex-col h-full" style={{ width: "18rem" }}>
      <img
        src={el.image}
        style={{ height: "100px", objectFit: "contain" }}
        className="mx-auto w-24 h-24 object-cover"
        alt="..."
      />
      <div className="card-body flex-grow">
        <h5 className="text-base font-semibold mt-2">{el.title}</h5>
        <p className="card-text">{truncatedDescription}</p>
      </div>
      <button
        onClick={() => addCartHandler(el)}
        className="bg-orange-400 hover:bg-orange-600 text-white rounded py-2 px-4"
      >
        {el.price} Aggiungi
      </button>
    </div>
  );
}

export default BaseCard;




