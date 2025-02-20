import { useLocation } from '@/context/LocationProvider'
import { useParty } from '@/context/PartyProvider'
import { StyleSheet } from 'react-native'
import MapView, { CameraZoomRange } from 'react-native-maps'
import PartyMarker from './PartyMarker'
import { useApp } from '@/context/AppProvider'
import { useMemo } from 'react'

const CAMERA_ZOOM_RANGE: CameraZoomRange = {
    minCenterCoordinateDistance: 100,
    maxCenterCoordinateDistance: 50000,
    animated: true,
}

const Map = () => {
    const { currentLocation } = useLocation()
    const { parties, selectedParty } = useParty()
    const { mapRef } = useApp()

    const mapPadding = useMemo(() => {
        const bottom = selectedParty ? 300 : 0
        return { bottom, right: 0, top: 0, left: 0 }
    }, [selectedParty])

    const renderMarkers = () => {
        return parties.map((party, index) => (
            <PartyMarker key={party.id} party={party} index={index} />
        ))
    }

    return (
        <MapView
            ref={mapRef}
            key={parties.length}
            style={styles.container}
            initialRegion={currentLocation}
            showsUserLocation={true}
            loadingEnabled={true}
            mapPadding={mapPadding}
            cameraZoomRange={CAMERA_ZOOM_RANGE}

        >
            {renderMarkers()}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})