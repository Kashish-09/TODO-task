import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authServices';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96">
        <AuthForm type="login" onSubmit={handleLogin} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
