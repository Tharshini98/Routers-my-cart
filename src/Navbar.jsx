import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartCount, searchTerm, onSearchChange }) => {
  const username = "Guest";
  const country = "India 🇮🇳";

  return (
    <nav className="bg-black text-white shadow-md p-4 flex flex-col sm:flex-row items-center justify-between relative">
      <Link to="/" className="text-xl font-bold mb-3 sm:mb-0">
        Shopify.in
      </Link>

      <div className="w-full max-w-md sm:static absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:mt-0 mt-2">
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search Products"
          className="w-full border border-gray-300 rounded px-3 py-1 text-black"
        />
      </div>

      <div className="flex items-center space-x-6 mt-3 sm:mt-0">
        <div className="flex items-center space-x-1 text-sm cursor-pointer hover:underline">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{country}</span>
        </div>

        <div className="text-sm text-right leading-tight cursor-pointer hover:underline">
          <div>Hello, {username}</div>
          <div className="font-bold">
            <Link to="/signin">Sign In</Link>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <Link
            to="/cart"
            className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center"
          >
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;