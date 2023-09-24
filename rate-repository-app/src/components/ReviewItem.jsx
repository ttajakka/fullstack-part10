import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingRight: 60,
  },
  username: {
    fontWeight: theme.fontWeights.bold,
  },
  createdAt: {
    color: theme.colors.textSecondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 30,
    margin: 10,
  },
});

const ReviewItem = ({ id, rating, user, createdAt, text, repository, actions, refetch }) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const handlePressView = () => {
    navigate(`/${repository.id}`);
  };

  const handlePressDelete = () =>
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            await deleteReview(id);
            refetch();
          },
        },
      ]
    );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.createdAt}>{`${day}.${month}.${year}`}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      {actions && (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handlePressView}>
            <Text color={'white'} fontWeight={'bold'}>
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={handlePressDelete}
          >
            <Text color={'white'} fontWeight={'bold'}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
