import { StyleSheet, Text, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'

const PartyDetails = () => {
    const { selectedParty } = useParty()

    return (
        <View style={styles.container}>
            <Text>
                {selectedParty?.venue.name}
            </Text>
        </View>
    )
}

export default PartyDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#F8F9FA',
    },
})