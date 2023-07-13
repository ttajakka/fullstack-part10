import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundDark,
  },
  tab: {
    paddingVertical: 20,
    paddingHorizontal: 15
  }
});

const AppBarTab = ({ label }) => {
  return <View>
    <Text style={styles.tab} color={"white"} fontSize={'subheading'} fontWeight={"bold"}>{label}</Text>
  </View>
}

const AppBar = () => {
  return <View style={styles.container}>{
    <AppBarTab label="Repositories"/>
  }</View>;
};

export default AppBar;