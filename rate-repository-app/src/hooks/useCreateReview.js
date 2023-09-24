import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const payload = await mutate({
      variables: { review: { ownerName, repositoryName, rating, text } },
    });
    const { data } = payload;

    return data;
  };

  return [createReview, result];
};

export default useSignIn;
