import AppBottomSheet from '@/components/BottomSheet/BottomSheet'
import FiltersBottomSheet from '@/components/FiltersBottomSheet/FiltersBottomSheet'
import Map from '@/components/Map/Map'
import { View } from '@/components/Themed'
import { StyleSheet } from 'react-native'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Map />
            <AppBottomSheet />
            <FiltersBottomSheet />
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})