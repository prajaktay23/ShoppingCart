import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback } from 'react'
import CustomButton from './CustomButton'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/cartSlice'

type ItemProps = {
    data: {
        title: string,
        id: number,
        price: number,
        image: string
    }
}
const Item = React.memo(({ data }: ItemProps) => {
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        console.log(`Added ${data.title} to cart`);
        dispatch(addToCart(data));

    }, [data, dispatch]);

    return (
        <View style={styles.container}>
            <Image src={data.image} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.title}>{data.price}</Text>

            <CustomButton onClick={() => handleAddToCart()} title={"Add to Cart"} style={styles.addCartButton} />
        </View>
    )
});

export default Item

const styles = StyleSheet.create({
    container: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    addCartButton: {
        backgroundColor: '#f9ce0d',

    }
})