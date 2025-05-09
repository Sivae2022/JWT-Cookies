import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { registerUser } from '../services/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const passwordCriteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const allValid = Object.values(passwordCriteria).every(Boolean);
    if (!allValid) {
      toast.error('Password does not meet all constraints.');
      return;
    }

    try {
      await registerUser(name, email, password);
      toast.success('Registration Successful!');
      navigate('/login');
    } catch (err) {
      toast.error('User already exists!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96">
        <h2 className="text-center text-3xl font-bold text-purple-600 mb-6">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-9 right-3 cursor-pointer text-purple-500"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Password Criteria */}
          <div className="mb-6 text-sm">
            <p className="text-gray-700 mb-1 font-medium">Password must contain:</p>
            <ul className="space-y-1">
              <li className={passwordCriteria.length ? 'text-green-600' : 'text-red-500'}>
                • At least 8 characters
              </li>
              <li className={passwordCriteria.uppercase ? 'text-green-600' : 'text-red-500'}>
                • At least one uppercase letter (A-Z)
              </li>
              <li className={passwordCriteria.lowercase ? 'text-green-600' : 'text-red-500'}>
                • At least one lowercase letter (a-z)
              </li>
              <li className={passwordCriteria.number ? 'text-green-600' : 'text-red-500'}>
                • At least one number (0-9)
              </li>
              <li className={passwordCriteria.special ? 'text-green-600' : 'text-red-500'}>
                • At least one special character (!@#$%^&*)
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-medium hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
