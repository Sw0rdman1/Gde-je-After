import { Image, StyleSheet, Text, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import VenueInformations from './VenueInformations'
import DatePicker from '../DatePicker/DatePicker'

const PartyDetails = () => {
    const { selectedParty } = useParty()

    if (!selectedParty) {
        return null
    }

    return (
        <View style={styles.container}>
            <VenueInformations venue={selectedParty.venue} />
            <DatePicker />
        </View>
    )
}

export default PartyDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
})