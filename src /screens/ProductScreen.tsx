import { FlatList, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { generateMockData } from '../utils/mockItemData'
import Item from '../components/Item'
import NavBar from '../components/NavBar'
import { useNavigation } from '@react-navigation/native'
import { ProductStackParamList } from '../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type ProductScreenNavigationProp = NativeStackNavigationProp<
    ProductStackParamList,
    'Cart'
>;

const ProductScreen = () => {
    const navigation = useNavigation<ProductScreenNavigationProp>();

    const data = useMemo(() => generateMockData(5000), []);

    const renderRightAccesory = () => {
        console.log("Right Accesory Pressed");
        navigation.navigate('Cart');
    }

    return (
        <SafeAreaView style={styles.constainer}>
            <NavBar
                title="Products"
                renderRightAccesory={renderRightAccesory} imageName="opencart"
            />
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={data}
                numColumns={2}
                renderItem={({ item }) => <Item data={item} />}
                getItemLayout={(_, index) => ({ length: 50, offset: 50 * index, index })}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                windowSize={21}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.column}
            />

        </SafeAreaView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#c3daf6",

    },
    list: {
        width: '100%',
    },
    listContent: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c3daf6",
    },
    column: {
        justifyContent: "space-around",
    },
})