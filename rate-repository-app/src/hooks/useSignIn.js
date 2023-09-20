import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    console.log('hello', username, password);
    const data = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.data.authenticate.accessToken);
    apolloClient.resetStore();

    // console.log('error:', result.error)
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
