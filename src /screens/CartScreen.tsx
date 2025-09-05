import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'

const CartScreen = () => {

    const items = useSelector((state: any) => state.cart.items);
    console.log("Cart Items: ", items);
    const total = items.reduce((acc: number, item: { price: number }) => acc + item.price, "");

    const renderAddToCartList = () => {
        console.log("Add to cart pressed");
        return (
            <View>
                <Text style={styles.countStyle}>Total: {total}</Text>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )

    }
    return (
        <SafeAreaView style={styles.container}>
            <NavBar title="Cart" />
            <View style={styles.cartView}>
                {total && renderAddToCartList()}
                {!total && <Text style={styles.emptyCart}>Your cart is empty</Text>}
            </View>
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyCart: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    cartView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        width: '100%',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
})