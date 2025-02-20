import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useParty } from '@/context/PartyProvider'
import BackButton from './BackButton'

const PartyDetails = () => {
    const { selectedParty } = useParty()

    return (
        <View style={styles.container}>
            <BackButton />
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
    },
})