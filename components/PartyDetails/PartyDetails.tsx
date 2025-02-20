import { Image, StyleSheet, Text, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import VenueInformations from './VenueInformations'

const PartyDetails = () => {
    const { selectedParty } = useParty()

    if (!selectedParty) {
        return null
    }

    return (
        <View style={styles.container}>
            <VenueInformations venue={selectedParty.venue} />
        </View>
    )
}

export default PartyDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: 'white',
    },
})