import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const { token } = useAuth();  // Assuming token is available from context
  const [user, setUser] = useState(null);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);  // Set user data
      } catch (err) {
        toast.error('Error fetching profile data');
        navigate('/login');  // Redirect to login if token is invalid
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <header className="flex justify-between items-center bg-purple-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Profile</h1>
      </header>

      <main className="p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-center mb-6">User Profile</h2>

          {user ? (
            <div>
              <div className="mb-6">
                <label className="block text-gray-700">Name:</label>
                <p className="text-lg font-medium text-gray-800">{user.name}</p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Email:</label>
                <p className="text-lg font-medium text-gray-800">{user.email}</p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Role:</label>
                <p className="text-lg font-medium text-gray-800">{user.role}</p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
