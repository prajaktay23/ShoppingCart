// ProductNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import { ProductStackParamList, ProductTabParamList, UsersStackParamList } from "../types/navigation";
import UsersScreen from "../screens/UserScreen";
import Fontisto from "@react-native-vector-icons/fontisto";
import UsersDetailScreen from "../screens/UsersDetailScreen";

const Tab = createBottomTabNavigator<ProductTabParamList>();
const Stack = createNativeStackNavigator<ProductStackParamList>();
const UsersStack = createNativeStackNavigator<UsersStackParamList>();


const ProductBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#4a90e2",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "#e8eff8",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    height: 80,
                },
            }}
        >
            <Tab.Screen
                name="ProductList"
                component={ProductNavigator}
                options={{
                    tabBarLabel: "Products",
                    tabBarIcon: () => (
                        <Fontisto name="shopping-bag" size={20} />
                    ),
                }} />
            <Tab.Screen
                name="UsersList"
                component={UsersNavigator}
                options={{
                    tabBarLabel: "Users",
                    tabBarIcon: () => <Fontisto name="person" size={20} />,
                }}
            />
        </Tab.Navigator>
    );
};

const UsersNavigator = () => {
    return (
        <UsersStack.Navigator screenOptions={{ headerShown: false }}>
            <UsersStack.Screen name="Users" component={UsersScreen} />
            <UsersStack.Screen name="UserDetail" component={UsersDetailScreen} />
        </UsersStack.Navigator>
    );
}

const ProductNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Products" component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
};
export default ProductBottomTabNavigator;
