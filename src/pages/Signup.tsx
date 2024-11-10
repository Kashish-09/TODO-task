import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authServices';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSignup = async (username: string, password: string) => {
    try {
      await signup(username, password);
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96">
        <AuthForm type="signup" onSubmit={handleSignup} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
