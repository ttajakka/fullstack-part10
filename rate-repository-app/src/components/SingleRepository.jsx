import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';
import useReviews from '../hooks/useReviews';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
  },
  rating: {
    paddin: 10,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  textcontainer: {
    paddingLeft: 10,
    paddingRight: 60
  },
  username: {
    fontWeight: theme.fontWeights.bold
  },
  createdAt: {
    color: theme.colors.textSecondary
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ rating, user, createdAt, text }) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.createdAt}>{`${day}.${month}.${year}`}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useSingleRepository(id);
  const { reviews } = useReviews(id);

  const reviewList = reviews ? reviews.edges.map((r) => r.node) : [];

  return (
    <FlatList
      data={reviewList}
      renderItem={({ item }) => <ReviewItem {...item} />}
      ListHeaderComponent={() => (
        <RepositoryItem {...repository} singleRepPage={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
