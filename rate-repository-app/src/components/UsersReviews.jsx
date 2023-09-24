import { View, FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import useGetCurrentUser from '../hooks/useGetCurrentUser';

const UsersReviews = () => {
  const { data, refetch } = useGetCurrentUser(true);

  const reviewList = data
    ? data.me.reviews.edges.map(r => r.node)
    : []

  return (
    <FlatList
      data={reviewList}
      renderItem={({ item }) => <ReviewItem {...item} actions={true} refetch={refetch} />}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default UsersReviews;
