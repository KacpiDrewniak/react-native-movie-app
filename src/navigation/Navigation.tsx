import {HomeScreen} from '../screens/HomeScreen.tsx';
import React from 'react';
import {RootStackParamList, Screens} from '../hooks/useNavigation.ts';
import {VideoScreen} from '../screens/VideoScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator<RootStackParamList>();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Screens.VideoScreen} component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
