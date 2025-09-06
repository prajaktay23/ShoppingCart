import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductNavigator from './ProductNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Product" component={ProductNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator