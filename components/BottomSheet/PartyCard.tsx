import Party from '@/models/Party'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useColors } from '@/hooks/useColors';
import { useParty } from '@/context/PartyProvider';


interface PartyCardProps {
    party: Party
}

const PartyCard: React.FC<PartyCardProps> = ({ party }) => {
    const { tint } = useColors();
    const { openPartyDetails } = useParty();

    const openPartyDetailsHandler = () => {
        openPartyDetails(party)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={openPartyDetailsHandler}>
            <Image
                source={{ uri: party.venue.logo }}
                style={styles.venueLogo}
            />
            <View style={styles.textContainer}>
                <Text style={styles.venueName} numberOfLines={2} ellipsizeMode='tail'>
                    {party.venue.name}
                </Text>
                <View style={styles.locationContainer}>
                    <FontAwesome6 name="location-dot" size={16} color={tint} />
                    <Text style={styles.venueAdress} numberOfLines={2} ellipsizeMode='tail'>
                        {party.venue.address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default PartyCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        paddingRight: 12,
        marginVertical: 8,
        borderRadius: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    venueLogo: {
        width: 150,
        height: 125,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderRightWidth: 1,
        borderColor: 'lightgray',
    },
    textContainer: {
        padding: 8,
        flex: 1,
        gap: 6,
    },
    venueName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    venueAdress: {
        fontWeight: 'bold',
        color: 'gray',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})