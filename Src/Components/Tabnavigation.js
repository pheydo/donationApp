import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Saved from '../Screen/Saved';
import Setting from '../Screen/Setting';
import Profile from '../Screen/Profile';

const Tab = createBottomTabNavigator();

function Tabnavigation() {
  return (
    <Tab.Navigator
    
    screenOptions={{

        headerShown:false
     } }
    
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
     
    </Tab.Navigator>
  );
} export default Tabnavigation