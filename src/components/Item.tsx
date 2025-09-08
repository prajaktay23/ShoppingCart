import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback } from 'react'
import CustomButton from './CustomButton'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/cartSlice'
import Toast from 'react-native-toast-message';

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
        Toast.show({
            type: 'success',
            text1: 'Added to Cart',
            text2: `${data.title} has been added to your cart.`,
            position: 'bottom',
            visibilityTime: 2000,
        });
        dispatch(addToCart(data));
    }, [data, dispatch]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.title}>{data.price}</Text>

            <CustomButton onClick={handleAddToCart} title={"Add to Cart"} />
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
        backgroundColor: '#fff'
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
})