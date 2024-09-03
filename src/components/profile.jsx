import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { client, account } from '../appwrite/appwrite';
import { Toaster, toast } from 'react-hot-toast';

function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    try {
      const userData = account.get();
    userData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
        toast.error('Failed to fetch user details.');
        toast.error('redirecting to login page.');
        setTimeout(() => {
          navigate("/login")
        }, 3000);
      }
    );
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      toast.success('Logged out successfully!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error('Logout failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster /> {/* Toaster for notifications */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile</h2>

        {userDetails ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="px-4 py-2 mt-1 text-gray-900 bg-gray-100 rounded-md">
                {userDetails.name}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="px-4 py-2 mt-1 text-gray-900 bg-gray-100 rounded-md">
                {userDetails.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
            <div className="mt-4 text-center">
              <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                Go to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-600">Loading...</p>
          </div>

        )}
      </div>
    </div>
  );
}

export default Profile;
