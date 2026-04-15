import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-blue-600">KariGo</h1>

      <div className="space-x-4">

        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/find" className="hover:text-blue-500">Find Workers</Link>
        <Link to="/my-bookings" className="hover:text-blue-500">My Bookings</Link>

        {!token ? (
          <>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-500"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
};

export default Navbar;