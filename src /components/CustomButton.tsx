import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type CustomButtonProps = {
    onClick?: () => void;
    title?: string;
    style?: object;
}

const CustomButton = ({ onClick, title, style }: CustomButtonProps) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onClick}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#1d6ef1',
        margin: 10,
    }
})