import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    console.log('hello', username, password);
    const data = await mutate({
      variables: { credentials: { username, password } },
    });
    console.log('error:', result.error)
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
