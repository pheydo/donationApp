import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcomescreen from './Src/Screen/Onbording';
import Tabnavigation from './Src/Components/Tabnavigation';
import Campaign from './Src/Screen/Campaign';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{

        headerShown:false
     } }
      >
        <Stack.Screen
          name="Home"
          component={Welcomescreen}
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="Campaign" component={Campaign} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;




