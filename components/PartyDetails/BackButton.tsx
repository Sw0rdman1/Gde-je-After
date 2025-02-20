import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import { Ionicons } from '@expo/vector-icons'

const BackButton = () => {
    const { closePartyDetails } = useParty()

    const goBackHandler = () => {
        closePartyDetails()
    }

    return (
        <TouchableOpacity onPress={goBackHandler} style={styles.container}>
            <Ionicons style={styles.icon} name="chevron-back" size={24} color="white" />
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 25,
        paddingVertical: 10,
        alignSelf: 'flex-start',
        paddingLeft: 5,
        paddingRight: 15,
    },
    icon: {
        marginRight: 4,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})