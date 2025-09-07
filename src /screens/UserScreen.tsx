import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
} from "react-native";
import { useOfflineUsers } from "../hooks/useOfflineUsers";
import { User } from "../types/user";
import NavBar from "../components/NavBar";
import { SafeAreaView } from "react-native-safe-area-context";

const UsersScreen = () => {
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
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
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
        backgroundColor: "#8cacd5",
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
        color: "#555",
    },
    emptyText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 40,
        color: "#999",
    },
});
