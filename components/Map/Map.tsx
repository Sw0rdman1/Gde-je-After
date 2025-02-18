import { useLocation } from '@/context/LocationProvider'
import { useParty } from '@/context/PartyProvider'
import { StyleSheet } from 'react-native'
import MapView, { CameraZoomRange } from 'react-native-maps'
import PartyMarkers from './PartyMarkers'

const CAMERA_ZOOM_RANGE: CameraZoomRange = {
    minCenterCoordinateDistance: 100,
    maxCenterCoordinateDistance: 50000,
    animated: true,
}

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
            cameraZoomRange={CAMERA_ZOOM_RANGE}

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