import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} showURL={false} />}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('DEFAULT');
  const { repositories } = useRepositories(order);

  return (
    <>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
        prompt='Order by:'
      >
        <Picker.Item label="Latest repositories" value="DEFAULT" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST" />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
