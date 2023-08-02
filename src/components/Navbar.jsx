import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();
    navigate('/search/' + search)
  };

  const [search, setSearch] = useState('');

  return (
    <nav className="flex justify-between items-center bg-gray-800 h-20 py-3 px-3 md:px-10">
      <div className="flex items-center space-x-2 text-xl">
        <NavLink to={'/'} className="text-white">
          Logo
        </NavLink>
      </div>
      <div className="flex items-center space-x-2">
        <form className="flex" role="search" onSubmit={searchHandler}>
          <input
            className="border border-gray-400 px-2 py-1 mr-2 rounded-lg focus:outline-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg focus:outline-none"
            type="submit"
          >
            Search
          </button>
        </form>
        <NavLink to={'/cart'} className="text-white">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
