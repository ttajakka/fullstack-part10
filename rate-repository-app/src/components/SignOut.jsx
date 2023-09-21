import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
  console.log('hello from SignOut');

  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  useEffect(() => {
    const removeToken = async () => {
      await authStorage.removeAccessToken();
      const token = await authStorage.getAccessToken()
      console.log('from SignOut', token)
    };
    removeToken();
    apolloClient.resetStore();
    navigate('/');
  }, []);
  return null;
};

export default SignOut;
