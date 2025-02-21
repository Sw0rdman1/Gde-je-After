import { StyleSheet, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import VenueInformations from './VenueInformations'
import EventInformations from './EventInformations'

const PartyDetails = () => {
    const { selectedParty } = useParty()

    if (!selectedParty) {
        return null
    }

    return (
        <View style={styles.container}>
            <VenueInformations venue={selectedParty.venue} />
            <EventInformations party={selectedParty} />
        </View>
    )
}

export default PartyDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        gap: 24,
    },
})