import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);

  const signup = async (email, password) => {};
};
