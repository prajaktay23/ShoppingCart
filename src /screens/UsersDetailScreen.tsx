import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UsersStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

type UserDetailRouteProp = RouteProp<UsersStackParamList, "UserDetail">;
type UserDetailNavProp = NativeStackNavigationProp<
    UsersStackParamList,
    "UserDetail"
>;

const UsersDetailScreen = React.memo(() => {

    const navigation = useNavigation<UserDetailNavProp>();
    const route = useRoute<UserDetailRouteProp>();

    const { items } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <NavBar title='User Detail' renderBackNav={true} backNavigation={() => navigation.goBack()} />
            <View style={styles.listView}>
                <View style={styles.innerView}>
                    <Text style={styles.text}>{`Name: ${items?.name}`}</Text>
                    <Text style={styles.text}>{`User Name: ${items?.username}`}</Text>
                    <Text style={styles.text}>{`Email: ${items?.email}`}</Text>
                    <Text style={styles.text}>{`City: ${items?.address?.city}`}</Text>
                    <Text style={styles.text}>{`Phone No.: ${items?.phone}`}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
});

export default UsersDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eff8",
    },
    listView: {
        flex: 1,
        backgroundColor: "#c3daf6",
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