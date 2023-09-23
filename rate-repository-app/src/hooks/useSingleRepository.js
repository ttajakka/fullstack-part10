import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = ( id ) => {
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  });
  
  return { repository: data ? data.repository : undefined, loading };
};

export default useSingleRepository;