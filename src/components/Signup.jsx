import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../axios';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { name, username, email, password } = formData;
    if (!name || !username || !email || !password) {
      return setError('Please fill in all fields');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      await signupUser(formData);
      setSuccess('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Something went wrong. Please try again.'
      console.error("Signup error:", err)
      setError(errorMsg);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}

export default Signup;
