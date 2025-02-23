import { StyleSheet } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import VenueInformations from './VenueInformations'
import EventInformations from './EventInformations'
import { View } from '../Themed'
import { useColors } from '@/hooks/useColors'

const PartyDetails = () => {
    const { selectedParty } = useParty()
    const { backgroundDarker } = useColors()

    if (!selectedParty) {
        return null
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundDarker }]}>
            <VenueInformations venue={selectedParty.venue} />
            <EventInformations party={selectedParty} />
        </View>
    )
}

export default PartyDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
    },
})