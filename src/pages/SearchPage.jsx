import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchProducts, selectProducts } from "../features/products/productsSlice";
import BaseCard from "../components/BaseCard";

function SearchPage() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(searchProducts(params.key));
  }, [params.key]);

  const { data } = useSelector(selectProducts);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cerca per "{params.key}"</h1>

      <div className="flex flex-wrap justify-between">
        {data.map((p) => {
          return <BaseCard key={p.id} el={p} />;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
