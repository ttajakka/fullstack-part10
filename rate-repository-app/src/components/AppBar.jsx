import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import Constants from 'expo-constants';

import useAuthStorage from '../hooks/useAuthStorage';

import Text from './Text';
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundDark,
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

const AppBarTab = ({ label, route, ...props }) => {
  return (
    <Link to={route}>
      <Text
        style={styles.tab} {...props}
        color={'white'}
        fontSize={'subheading'}
        fontWeight={'bold'}
      >
        {label}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network'
  });
  const currentUser = data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" route="/" />
        {currentUser && <AppBarTab label="Create a review" route="/review-form" />}
        {currentUser ? (
          <AppBarTab onPress={onSignOut} label="Sign out" />
        ) : (
          <AppBarTab label="Sign in" route="/sign-in" />
        )}
        {!currentUser && <AppBarTab label="Sign up" route="/sign-up" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
