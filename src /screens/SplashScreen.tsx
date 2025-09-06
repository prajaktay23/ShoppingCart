import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../types/navigation";
import { Strings } from "../constants/Strings";

type SplashScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Splash"
>;

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1500));

                const token = await AsyncStorage.getItem("authToken");

                if (token) {
                    navigation.replace("Product");
                } else {
                    navigation.replace("Auth");
                }
            } catch (error) {
                console.error("Error checking auth token:", error);
                navigation.replace("Auth");
            }
        };

        checkAuth();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Strings.SPLASH.SPLASH_TITLE}</Text>
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
    },
});
