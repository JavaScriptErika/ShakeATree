import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TreeScene} from './src'
import {SeeFavorites} from './src'

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tree" component={TreeScene} options={{headerShown: false}}/>
          <Stack.Screen name="SeeFavorites" component={SeeFavorites} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
