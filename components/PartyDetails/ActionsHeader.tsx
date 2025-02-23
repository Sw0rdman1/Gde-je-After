import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Party from '@/models/Party'
import { useColors } from '@/hooks/useColors'

interface ActionsHeaderProps {
    selectedParty: Party;
    closePartyDetails: () => void;
}

const ActionsHeader: React.FC<ActionsHeaderProps> = ({ selectedParty, closePartyDetails }) => {
    const [isLiked, setIsLiked] = useState(false)
    const { top } = useSafeAreaInsets()
    const { background, text } = useColors()

    const goBackHandler = () => {
        closePartyDetails()
    }

    useEffect(() => {
        setIsLiked(selectedParty ? selectedParty?.venue.isLiked : false)
    }, [selectedParty])

    return (
        <>
            <TouchableOpacity
                onPress={goBackHandler}
                style={[styles.backButton, { backgroundColor: text, top: top + 10 }]}
            >
                <Ionicons style={styles.icon} name="chevron-back" size={24} color={background} />
                <Text style={[styles.text, { color: background }]}>Back</Text>
            </TouchableOpacity>

            <View style={[styles.actionContainer, { top: top + 10 }]}>
                <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: isLiked ? '#E74C3C' : background }]}
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <Ionicons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={28}
                        color={isLiked ? 'white' : text}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: background }]}>
                    <Ionicons
                        name='logo-instagram'
                        size={26}
                        color={text}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ActionsHeader

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 10,
        zIndex: 100,
        height: 45,
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
    },
    actionContainer: {
        position: 'absolute',
        right: 20,
        height: 45,
        zIndex: 100,
        flexDirection: 'row',
        alignContent: 'center',
        gap: 15,

    },
    actionButton: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

})