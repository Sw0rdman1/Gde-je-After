import Map from '@/components/Map/Map'
import { View } from '@/components/Themed'
import { StyleSheet } from 'react-native'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Map />
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})