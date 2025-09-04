import { FlatList, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { generateMockData } from '../utils/mockItemData'
import Item from '../components/Item'

const ProductScreen = () => {
    const data = useMemo(() => generateMockData(5000), []);

    return (
        <SafeAreaView style={styles.constainer}>
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
            />

        </SafeAreaView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: { width: '100%' }
})