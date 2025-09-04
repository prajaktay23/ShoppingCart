import React from 'react'
import ProductScreen from '../screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Product'>
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator