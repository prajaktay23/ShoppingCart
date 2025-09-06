import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from "@react-native-vector-icons/fontisto";

type Props = {
    title: string;
    renderRightAccesory?: () => void;
    imageName?: string | undefined;
}
const NavBar = ({ title, renderRightAccesory, imageName }: Props) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Text style={styles.title}>{title}</Text>
            {
                imageName &&
                <TouchableOpacity style={styles.rightAccesory} onPress={renderRightAccesory}>
                    <Fontisto name={imageName} size={20} />
                </TouchableOpacity>
            }

        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',

    },
    title: { fontSize: 20, fontWeight: 'bold' },
    rightAccesory: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 10,
        tintColor: '#000'
    }

})