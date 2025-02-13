import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const MainScreen = () => {
    return (
        <MapView
            style={styles.container}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})