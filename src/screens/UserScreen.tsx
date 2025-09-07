import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useOfflineUsers } from "../hooks/useOfflineUsers";
import NavBar from "../components/NavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { UsersStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../types/User";

type UserScreenRouteProp = NativeStackNavigationProp<UsersStackParamList, "UserDetail">;

const UsersScreen = () => {

    const navigation = useNavigation<UserScreenRouteProp>();

    const { users, loading } = useOfflineUsers();

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#4a90e2" />
            </View>
        );
    }

    if (!users || users.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>No users available</Text>
            </View>
        );
    }

    const renderItem = ({ item }: { item: User }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("UserDetail", { id: item.id.toString() })}
        >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <NavBar title="Users" />
            <View style={{ width: '100%' }}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                />
            </View>
        </SafeAreaView>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eff8",
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: "#c3daf6",
    },
    card: {
        backgroundColor: "#3c86e8",
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: "#030c17",
    },
    emptyText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 40,
        color: "#999",
    },
});
