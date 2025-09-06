// ProductNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import { ProductStackParamList, ProductTabParamList } from "../types/navigation";
import UsersScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator<ProductTabParamList>();
const Stack = createNativeStackNavigator<ProductStackParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Products" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Products" component={ProductScreen} />
            <Tab.Screen name="Users" component={UsersScreen} />
        </Tab.Navigator>
    );
};

const ProductNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
};

export default ProductNavigator;
