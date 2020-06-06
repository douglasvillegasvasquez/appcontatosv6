import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import cores from '../cores/cores';

import Contatos from '../screens/Contatos';
import EditarContato from '../screens/EditarContato';
import AddContato from '../screens/AddContato';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Contatos"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? cores.backgroundHeaderPrimary : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : cores.backgroundHeaderPrimary
                }}
            >

                <Stack.Screen
                    name="Contatos"
                    component={Contatos}
                    initialParams={{
                        listaContatos: []
                    }}
                />

                <Stack.Screen
                    name="AddContato"
                    component={AddContato}
                    options={{
                        title: "Novo Contato"
                    }}
                />

                <Stack.Screen
                    name="EditarContato"
                    component={EditarContato}
                    options={{
                        title: "Editar Contato"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}