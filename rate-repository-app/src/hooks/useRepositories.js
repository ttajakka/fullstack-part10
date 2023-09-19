// import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  let repositories;

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  
  if (data) repositories = data.repositories;

  const fetchRepositories = async () => {};

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

// const useRepositories = () => {
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);

  // const fetchRepositories = async () => {
    // setLoading(true);
    // const response = await fetch('http://10.46.21.131:5000/api/repositories');
    // const json = await response.json();
    // setLoading(false);
    // setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // return { repositories, loading, refetch: fetchRepositories };
// };


