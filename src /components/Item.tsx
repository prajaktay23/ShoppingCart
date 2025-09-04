import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

type ItemProps = {
    data: {
        title: string,
        id: number,
        price: number,
        image: string
    }
}
const Item = ({ data }: ItemProps) => {

    const handleAddToCart = () => {
        console.log(`Added ${data.title} to cart`);

    }
    return (
        <View style={styles.container}>
            <Image src={data.image} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <CustomButton onClick={() => handleAddToCart()} />
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})