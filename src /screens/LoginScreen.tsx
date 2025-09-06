import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EncryptedStorage from "react-native-encrypted-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Strings } from "../constants/Strings";

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Auth"
>;

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = async () => {
        try {
            await EncryptedStorage.setItem(
                "auth_token",
                JSON.stringify({ token: "dummy_token_123" })
            );

            Alert.alert("Login Success", "Token stored securely");
            navigation.replace("Product");
        } catch (e) {
            console.log("Login error", e);
            Alert.alert("Error", "Something went wrong while logging in");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Strings.LOGIN.WELCOME_MESSAGE}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>{Strings.LOGIN.LOGIN}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#c3daf6",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 32,
    },
    button: {
        backgroundColor: "#4a90e2",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
