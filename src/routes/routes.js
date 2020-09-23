import 'react-native-gesture-handler';
import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import{Selecionar} from '../pages/Selecionar';
import{Digitar} from '../pages/Digitar';
import{Calcular} from '../pages/Calcular';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Menu" headerTitleAlign = 'left'>
                <Stack.Screen name = "Selecionar" component = {Selecionar} />  
                <Stack.Screen name = "Digitar" component = {Digitar} />
                <Stack.Screen name = "Calcular" component = {Calcular} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};