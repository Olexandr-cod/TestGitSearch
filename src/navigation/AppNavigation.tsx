import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import UserProfile from '../screens/UserProfile';

const Stack = createNativeStackNavigator();
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          headerTitle: 'GitHub Searcher',
        }}>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
