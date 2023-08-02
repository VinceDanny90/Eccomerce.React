import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCategoriesAndProducts } from '../features/categories/categoriesReducer';
import BaseCard from '../components/BaseCard';


function HomePage() {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(loadCategoriesAndProducts());
  }, [dispatch]);

  return (
    <main className="container mx-auto py-8">
      <div className="px-4 md:px-0">
        <div className="flex flex-wrap">
          {categoriesData.map((category) => (
            <div key={category.id} className="p-4 m-2">
              <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
              <div className="flex overflow-x-auto mt-4 max-w-full mx-auto">
                <div className="flex p-4 bg-gray-200 space-x-4 rounded-lg shadow-md">
                  {category.products.map((p) => {
                    return <BaseCard key={p.id} el={p} />;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;




