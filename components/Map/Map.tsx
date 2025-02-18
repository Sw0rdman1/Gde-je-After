import { useLocation } from '@/context/LocationProvider'
import { useParty } from '@/context/PartyProvider'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import PartyMarkers from './PartyMarkers'

const Map = () => {
    const { currentLocation } = useLocation()
    const { parties } = useParty()

    return (
        <MapView
            key={parties.length}
            style={styles.container}
            initialRegion={currentLocation}
            showsUserLocation={true}
            loadingEnabled={true}
            cameraZoomRange={{
                minCenterCoordinateDistance: 100,
                maxCenterCoordinateDistance: 50000
            }}

        >
            <PartyMarkers parties={parties} />
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})