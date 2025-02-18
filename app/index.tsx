import { useLocation } from '@/context/LocationProvider'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const MainScreen = () => {
    const { currentLocation, loading } = useLocation()

    if (loading) {
        return null
    }

    return (
        <MapView
            style={styles.container}
            initialRegion={currentLocation}
            showsUserLocation={true}
            loadingEnabled={true}
            cameraZoomRange={{
                minCenterCoordinateDistance: 100,
                maxCenterCoordinateDistance: 50000
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