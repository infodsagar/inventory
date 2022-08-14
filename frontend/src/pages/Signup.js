import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col mt-10 max-w-[30vw] mx-10'
    >
      <h3 className='text-2xl py-2'>Sign Up</h3>
      <label>Email:</label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='border-2'
      />
      <label>Password:</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='border-2'
      />
      <button
        type='submit'
        disabled={isLoading}
        className='border-2 rounded-lg max-w-[70%] self-center	px-8 my-4'
      >
        Submit
      </button>
      {error}
    </form>
  );
};

export default Signup;
