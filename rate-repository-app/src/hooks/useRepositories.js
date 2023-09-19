// import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);

  let repositories;

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  // console.log(data.repositories)
  if (data) repositories = data.repositories;

  const fetchRepositories = async () => {
    // setLoading(true);
    // const response = await fetch('http://10.46.21.131:5000/api/repositories');
    // const json = await response.json();
    // setLoading(false);
    // setRepositories(json);
  };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
