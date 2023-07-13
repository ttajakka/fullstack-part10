// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
// import Text from './Text';


const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      {/* <Text fontSize="subheading" fontWeight="bold">Rate Repository Application</Text> */}
      <RepositoryList />
    </View>
  );
};

export default Main;