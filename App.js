import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Filter } from 'react-native-vector-icons';
import Create from './home/createActivity';

import Home from './home/home';
import Activities from './home/activities';
import Activity from './home/activity';
import Splash from './home/splash';

// You can import from local files
import AssetExample from './components/AssetExample';

const Stack = createStackNavigator();

import { ActivityContext, ActivityState } from './home/state';

export default function App() {
  //change later to app for splash screen
  const [ActiveView, setActiveView] = React.useState('welcome');
 
  const Default = ({ navigation }) => {
    return (
      <ActivityContext.Provider value={ActivityState}>
        <View style={styles.container}>
          {ActiveView === 'welcome' ? (
            <Splash />
          ) : (
            <View>
              <Activities navigation={navigation} />
            </View>
          )}
        </View>
      </ActivityContext.Provider>
    );
  };

  setTimeout(() => {
    setActiveView('app');
  }, 3000);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Liferithm',
            headerStyle: {
              backgroundColor: 'rgb(23, 206, 106)',
              color: '#fff',
            },
          }}
          name="Home"
          component={Default}
        />
        <Stack.Screen
          options={{
            title: 'Create Activity',
            headerStyle: {
              backgroundColor: 'rgb(23, 206, 106)',
              color: '#fff',
            },
          }}
          name="Create"
          component={Create}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'rgb(23, 206, 106)',
              color: '#fff',
            },
          }}
          name="Activity"
          component={Activity}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
