import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './pages/PaginaLogin'
import Cadastro from './pages/PaginaCadastro'
import Tarefa from './pages/PaginaTarefa'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'TAREFA'>
      <Stack.Screen name = "LOGIN" component = {Login} options = {{headerShown: false,}}/>
      <Stack.Screen name = "CADASTRO" component = {Cadastro} options = {{headerShown: false,}}/>
      <Stack.Screen name = "TAREFA" component = {Tarefa} options = {{headerShown: false,}}/>
    </Stack.Navigator>
    </NavigationContainer>
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
