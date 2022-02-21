import { StyleSheet, Text, View, Animated } from 'react-native';
import Tree from './src/Tree/Tree'
import FadeInView from './src/animations/FadeInView';

export default function App() {
  
  return (
    <>
    <View style={styles.container}>
      <Tree />
    </View>
    <View style={styles.grassContainer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    flex: 3,
    backgroundColor: '#e6fdff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grassContainer: {
    flex: 1,
    backgroundColor: "#72a742"
  }
});
