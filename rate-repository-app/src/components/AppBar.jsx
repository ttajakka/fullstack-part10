import { View, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';

import theme from '../theme';

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

const AppBarTab = ({ label }) => {
  return <Pressable onPress={() => null}>
    <Text
      style={styles.tab}
      color={"white"}
      fontSize={'subheading'}
      fontWeight={"bold"}
    >
      {label}
    </Text>
  </Pressable>
}

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab label="Repositories" />
  </View>;
};

export default AppBar;