import { View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

import Text from './Text';

import theme from '../theme';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundDark,
    flexDirection: "row"
  },
  tab: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  }
});

const AppBarTab = ({ label, route }) => {
  return <Link to={route}>
    <Text
      style={styles.tab}
      color={"white"}
      fontSize={'subheading'}
      fontWeight={"bold"}
    >
      {label}
    </Text>
  </Link>
}

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab label="Repositories" route="/" />
      <AppBarTab label="Sign in" route="/sign-in" />
    </ScrollView>
  </View>;
};

export default AppBar;