import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { ProductStackParamList } from '../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type CartScreenNavigationProp = NativeStackNavigationProp<
    ProductStackParamList,
    'Cart'
>;

const CartScreen = () => {
    const navigation = useNavigation<CartScreenNavigationProp>();

    const items = useSelector((state: any) => state.cart.items);
    console.log("Cart Items: ", items);
    const total = useMemo(
        () => items.reduce((acc: number, item: any) => acc + item?.price, 0),
        [items]
    );

    const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

    const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(
        ({ item }: { item: any }) => (
            <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>
        ),
        []
    );

    if (items.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <NavBar title="Cart" renderBackNav={true} backNavigation={handleGoBack} />
                <View style={styles.cartView}>
                    <Text style={styles.emptyCart}>Your cart is empty</Text>
                </View>
            </SafeAreaView>
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <NavBar title="Cart" renderBackNav={true} backNavigation={handleGoBack} />
            <View style={styles.cartView}>
                <View style={styles.header}>
                    <Text style={styles.countStyle}>Total: ${total.toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Selected Items</Text>
                </View>

                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={renderSeparator}
                    contentContainerStyle={styles.listContent}
                    initialNumToRender={8}
                    maxToRenderPerBatch={8}
                    windowSize={10}
                    getItemLayout={(_data, index) => ({
                        length: 80,
                        offset: 80 * index,
                        index,
                    })}

                    removeClippedSubviews
                />
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eff8",
    },
    cartView: {
        flex: 1,
        backgroundColor: "#c3daf6",
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 10,
    },
    countStyle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#999",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 12,
        borderWidth: 1,
        borderColor: "#aaa",
        backgroundColor: "#eee",
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "600",
    },
    price: {
        fontSize: 14,
        color: "#4a90e2",
        marginTop: 4,
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyCart: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40,
    },
});