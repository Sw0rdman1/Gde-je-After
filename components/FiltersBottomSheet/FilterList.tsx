import { StyleSheet } from 'react-native'
import { Text, View } from '../Themed'
import FilterCard from './FilterCard'

const FilterList = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Let's narrow down your search
                </Text>
            </View>
            <View style={styles.filterContainer}>
                <FilterCard />
            </View>

        </View>
    )
}

export default FilterList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    filterContainer: {
        padding: 8,
        width: '100%',
        gap: 20,
    },
})