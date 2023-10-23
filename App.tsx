import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RootStack } from '@/screens/index';

const { Screen, Navigator} = createStackNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor='white'
      />
      <NavigationContainer>
        <Navigator
         initialRouteName='Welcome'
         screenOptions={{
          cardStyle: { elevation: 1, }
      }}
        >
          {RootStack.map((item,index)=>{
              return (
                item.component !== undefined 
                ?    <Screen 
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={item.options}
                      />
                :     null
              )
          })}
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
