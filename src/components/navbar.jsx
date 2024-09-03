import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";
import { toast, Toaster } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUserDetails] = useState({ name: "" });

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      toast.success("Logged out successfully", { duration: 5000 });
      setUserDetails((prev) => ({ ...prev, name: "" }));
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Error while trying to Logout");
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await account.get();
        setUserDetails(userData);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch user details.');
        toast.error('Redirecting to login page.');
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <nav className="navbar p-4 relative">
      <Toaster />
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          संस्कृतिSync
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-6">
          <Link to="/profile" className="text-white text-lg border border-[#fff] rounded-lg px-4 py-2 hover:text-gray-300 transition duration">
            {user.name}
          </Link>
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/heritage" className="text-white">
            Heritage Sites
          </Link>
          {user.name ? (
            <>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link
          to="/"
          className="block text-white py-2 px-4"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/heritage"
          className="block text-white py-2 px-4"
          onClick={() => setIsOpen(false)}
        >
          Heritage Sites
        </Link>
        {user.name ? (
          <>
            <Link
              to="/profile"
              className="block text-white py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left text-white bg-red-500 hover:bg-red-700 px-4 py-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="block text-white py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-white py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
