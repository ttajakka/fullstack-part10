import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = ( id ) => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  });
  
  return { reviews: data ? data.repository.reviews : undefined, loading };
};

export default useReviews;