import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';
import { RootStackParamList } from '../types/navigation';
import ProductBottomTabNavigator from './ProductNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Product" component={ProductBottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator