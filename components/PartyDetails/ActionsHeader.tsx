import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useParty } from '@/context/PartyProvider'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ActionsHeader = () => {
    const [isLiked, setIsLiked] = useState(false)
    const { closePartyDetails } = useParty()
    const { top } = useSafeAreaInsets()

    const goBackHandler = () => {
        closePartyDetails()
    }

    return (
        <View style={[styles.container, { top: top + 10 }]}>
            <TouchableOpacity onPress={goBackHandler} style={styles.backButton}>
                <Ionicons style={styles.icon} name="chevron-back" size={24} color="white" />
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
            <View style={styles.actionContainer}>
                <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: isLiked ? '#E74C3C' : 'white' }]}
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <Ionicons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={28}
                        color={isLiked ? 'white' : 'black'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons
                        name='logo-instagram'
                        size={26}
                        color='black'
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ActionsHeader

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        height: 45,
        position: 'absolute',
        left: 10,
        right: 20,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'space-between',
    },
    backButton: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 25,
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
    actionContainer: {
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        gap: 15,

    },
    actionButton: {
        backgroundColor: 'white',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

})