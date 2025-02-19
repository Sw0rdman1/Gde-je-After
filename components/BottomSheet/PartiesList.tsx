import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native'

const PartiesList = () => {
    const data = useMemo(
        () =>
            Array(50)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const renderItem = useCallback(
        ({ item }: { item: string }) => (
            <View style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        []
    );
    return (
        <BottomSheetFlatList
            data={data}
            keyExtractor={(i) => i}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
        />
    )
}

export default PartiesList

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
})