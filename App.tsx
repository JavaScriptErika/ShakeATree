import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tree} from './src'

import { StyleSheet, Text, View, Animated } from 'react-native';
// import Tree from './src/Tree/Tree'
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tree" component={Tree}/>
      </Stack.Navigator>
    </NavigationContainer>
    {/* <LinearGradient colors={['#ffeeea', '#ffeeea', '#ffbbac']} style={styles.container}>
      <Tree />
    </LinearGradient>
    <ScrollView style={styles.factsContainer}>
      <View style={styles.innerFactsContainer}>
        <Text style={styles.heading}>Tap the tree for TreeCard facts</Text>
        <Ionicons name="md-heart-outline" size={32} style={styles.textLight} />
      </View>
      
    </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  factsContainer: {
    flex: 1,
    backgroundColor: "#105157",
    color: "#fff4df"
  },
  innerFactsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    color: '#fff4df'
  },
  heading: {
    fontSize: 20,
    color: '#fff4df'
  },
  textLight: {
    color: '#fff4df'
  }
});
