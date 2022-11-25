import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Posts from './src/views/Posts';
import TokenContext from './src/views/contexts/TokenContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <TokenContext.Provider value={{ token, setToken }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="posts" component={Posts} />
          </Stack.Navigator>
        </NavigationContainer>
      </TokenContext.Provider>
    </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
