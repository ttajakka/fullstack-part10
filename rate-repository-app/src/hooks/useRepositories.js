import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order) => {
  let orderBy, orderDirection = undefined;
  switch (order) {
    case 'HIGHEST': {
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      break;
    }
    case 'LOWEST': {
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      break;
    }
    case 'DEFAULT': {
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
      break;
    }
  }

  let repositories;

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection }
  });

  if (data) repositories = data.repositories;

  return { repositories, loading };
};

export default useRepositories;
