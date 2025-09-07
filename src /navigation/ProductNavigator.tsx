// ProductNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import { ProductStackParamList, ProductTabParamList } from "../types/navigation";
import UsersScreen from "../screens/UserScreen";
import Fontisto from "@react-native-vector-icons/fontisto";

const Tab = createBottomTabNavigator<ProductTabParamList>();
const Stack = createNativeStackNavigator<ProductStackParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Products" screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#4a90e2",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                backgroundColor: "#e8eff8",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                height: 60,
            },
        }}>
            <Tab.Screen name="Products" component={ProductScreen} options={{
                tabBarLabel: "Products",
                tabBarIcon: () => (
                    <Fontisto name="shopping-bag" size={20} />
                ),
            }} />
            <Tab.Screen name="Users" component={UsersScreen} options={{
                tabBarLabel: "Users",
                tabBarIcon: () => (
                    <Fontisto name="person" size={20} />
                ),
            }} />
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
