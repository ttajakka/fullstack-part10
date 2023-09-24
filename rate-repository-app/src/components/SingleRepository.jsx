import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useSingleRepository from '../hooks/useSingleRepository';
import useReviews from '../hooks/useReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useSingleRepository(id);
  const { reviews } = useReviews(id);

  const reviewList = reviews ? reviews.edges.map((r) => r.node) : [];

  return (
    <FlatList
      data={reviewList}
      renderItem={({ item }) => <ReviewItem {...item} actions={false} />}
      ListHeaderComponent={() => (
        <RepositoryItem {...repository} singleRepPage={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
