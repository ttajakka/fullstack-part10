// import { useEffect } from 'react';
import { useParams } from 'react-router-native';
import { View } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';

const SingleRepositoryPage = () => {
  const { id } = useParams();

  const {repository} = useSingleRepository(id);

  return (
    <View>
      <RepositoryItem {...repository} singleRepPage={true} />
    </View>
  );
};

export default SingleRepositoryPage;
