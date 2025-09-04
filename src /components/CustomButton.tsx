import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type CustomButtonProps = {
    onClick?: () => void
}

const CustomButton = ({ onClick }: CustomButtonProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <Text>CustomButton</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '90%',
        backgroundColor: '#ddd',
        borderRadius: 5
    }
})