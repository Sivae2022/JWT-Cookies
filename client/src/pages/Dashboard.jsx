// Dashboard.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext";
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout(); // Removes token and user data from the context and localStorage
    toast.success("Logout Successfully")
    navigate('/login'); // Redirect to login page
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-purple-50">
      <header className="flex justify-between items-center bg-purple-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-800" onClick={() => navigate('/profile')}>
            Profile
          </button>
          <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <main className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Your Dashboard!</h2>
      </main>
    </div>
  );
};

export default Dashboard;