import { View, StyleSheet, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    padding: 15,
  },
  infoCol: {
    paddingRight: 20,
    marginHorizontal: 20,
  },
  tinyLogo: {
    width: 45,
    height: 45,
    borderRadius: 4,
  },
  languagePill: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numberItem: {
    alignItems: 'center',
  },
  bottomDivider: {
    height: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
});

const NumberItem = ({ num, label }) => {
  const toKnotation = (n) => {
    if (n < 1000) return n.toString();

    return (n / 1000).toFixed(1).toString() + 'k';
  };
  return (
    <View style={styles.numberItem}>
      <Text fontWeight="bold" style={{ paddingBottom: 5 }}>
        {toKnotation(num)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
  url,
  singleRepPage,
}) => {
  const navigate = useNavigate();

  const clickRepositoryItem = () => {
    if (singleRepPage) return;
    navigate(`/${id}`);
  };

  const openURL = () => {
    Linking.openURL(url)
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <Pressable onPress={clickRepositoryItem}>
        <View style={styles.topRow}>
          <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
          <View style={styles.infoCol}>
            <Text
              style={{ paddingBottom: 8 }}
              fontSize="subheading"
              fontWeight="bold"
            >
              {fullName}
            </Text>
            <Text style={{ paddingBottom: 8 }} color="textSecondary">
              {description}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.languagePill}>{language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.numbersRow}>
          <NumberItem num={stargazersCount} label={'Stars'} />
          <NumberItem num={forksCount} label={'Forks'} />
          <NumberItem num={reviewCount} label={'Reviews'} />
          <NumberItem num={ratingAverage} label={'Rating'} />
        </View>
        {singleRepPage && (
          <Pressable style={styles.button} onPress={openURL}>
            <Text color="white" fontSize="subheading" fontWeight="bold">
              Open in GitHub
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default RepositoryItem;
