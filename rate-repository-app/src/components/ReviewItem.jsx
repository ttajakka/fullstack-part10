import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

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
});

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

export default ReviewItem