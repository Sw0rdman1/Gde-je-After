import { StyleSheet, Text, View } from 'react-native'

const FilterList = () => {
    return (
        <View style={styles.container}>
            <Text>FilterList</Text>
        </View>
    )
}

export default FilterList

const styles = StyleSheet.create({
    container: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
})