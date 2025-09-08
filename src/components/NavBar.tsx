import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from "@react-native-vector-icons/fontisto";

type Props = {
    title: string;
    renderRightAccesory?: () => void;
    imageName?: string | undefined;
    renderBackNav?: boolean | false;
    backNavigation?: () => void;
}
const NavBar = ({ title, renderRightAccesory, imageName, renderBackNav, backNavigation }: Props) => {
    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.innerContainer}>
                {
                    renderBackNav &&
                    <TouchableOpacity style={styles.leftAccesort} onPress={backNavigation}>
                        <Fontisto name='arrow-left' size={20} />
                    </TouchableOpacity>
                }

                <Text style={styles.title}>{title}</Text>
                {
                    imageName &&
                    <TouchableOpacity style={styles.rightAccesory} onPress={renderRightAccesory}>
                        <Fontisto name={imageName as any} size={20} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#e8eff8",
        shadowColor: "#365d90",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    leftAccesort: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 10,
        tintColor: '#000',
        marginRight: 10,
    },
    rightAccesory: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 10,
        tintColor: '#000',
        marginRight: 10,
    }

})