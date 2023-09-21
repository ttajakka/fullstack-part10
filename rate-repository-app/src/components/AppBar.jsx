import { View, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import useAuthStorage from '../hooks/useAuthStorage';

import Text from './Text';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

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

const AppBarTab = ({ label, route }) => {
  return (
    <Link to={route}>
      <Text
        style={styles.tab}
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
  const authStorage = useAuthStorage();
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = async () => {
      const tokenFromStorage = await authStorage.getAccessToken();
      setToken(tokenFromStorage);
    };
    getToken();
    console.log('from AppBar, token:', token);
  }, []);

  const { data } = useQuery(GET_ME, {
    context: { headers: { Authorization: `Bearer ${token}` } },
    fetchPolicy: 'cache-and-network',
  });

  console.log('me:', data.me);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" route="/" />
        {data.me ? (
          <AppBarTab label="Sign out" route="/sign-out" />
        ) : (
          <AppBarTab label="Sign in" route="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
