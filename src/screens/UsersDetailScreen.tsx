import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UsersStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '../types/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserDetailRouteProp = RouteProp<UsersStackParamList, "UserDetail">;
type UserDetailNavProp = NativeStackNavigationProp<
    UsersStackParamList,
    "UserDetail"
>;

const UsersDetailScreen = () => {
    const navigation = useNavigation<UserDetailNavProp>();
    const route = useRoute<UserDetailRouteProp>();
    const { id } = route.params;

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUsers = await AsyncStorage.getItem("users");
                if (storedUsers) {
                    const parsedUsers: User[] = JSON.parse(storedUsers);
                    const found = parsedUsers.find((u) => u.id.toString() === id);
                    if (found) setUser(found);
                }
            } catch (e) {
                console.log("Error loading user:", e);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [id]);

    if (loading) return <ActivityIndicator size="large" />;

    return (
        <SafeAreaView style={styles.container}>
            <NavBar title='User Detail' renderBackNav={true} backNavigation={() => navigation.goBack()} />
            <View style={styles.listView}>
                {!user && <Text style={styles.text}>User not found. Login again.</Text>}
                {user && <View style={styles.innerView}>
                    <Text style={styles.text}>{`Name: ${user?.name}`}</Text>
                    <Text style={styles.text}>{`User Name: ${user?.username}`}</Text>
                    <Text style={styles.text}>{`Email: ${user?.email}`}</Text>
                    <Text style={styles.text}>{`City: ${user?.address?.city}`}</Text>
                    <Text style={styles.text}>{`Phone No.: ${user?.phone}`}</Text>
                </View>}

            </View>
        </SafeAreaView>
    )
}

export default UsersDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eff8",
    },
    listView: {
        flex: 1,
        backgroundColor: "#c3daf6",
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerView: {
        backgroundColor: '#3c86e8',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    listContent: {
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c3daf6",
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    }
})